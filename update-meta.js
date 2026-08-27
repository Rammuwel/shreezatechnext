const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const appDir = path.join(__dirname, 'src', 'app');

walkDir(appDir, (filePath) => {
  if (filePath.endsWith('page.jsx') || filePath.endsWith('page.tsx')) {
    const dirName = path.basename(path.dirname(filePath));
    if (dirName === 'app') return; // root
    
    const title = dirName.replace(/-/g, ' ').toLowerCase();
    const layoutPath = path.join(path.dirname(filePath), 'layout.jsx');
    
    // Check if layout.jsx already exists
    if (fs.existsSync(layoutPath)) {
      let content = fs.readFileSync(layoutPath, 'utf8');
      if (content.includes('export const metadata =')) {
        content = content.replace(/title:\s*["'][^"']+["']/g, `title: "${title}"`);
        fs.writeFileSync(layoutPath, content, 'utf8');
        console.log(`Updated existing layout.jsx for ${dirName}`);
      }
    } else {
      // Create new layout.jsx
      const layoutContent = `export const metadata = {
  title: "${title}",
};

export default function Layout({ children }) {
  return children;
}
`;
      fs.writeFileSync(layoutPath, layoutContent, 'utf8');
      console.log(`Created layout.jsx for ${dirName} with title: ${title}`);
    }
  }
});
