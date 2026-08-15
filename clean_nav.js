const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('c:/Users/shrir/shreezatech/src/app', (filepath) => {
    if (filepath.endsWith('.jsx') && !filepath.endsWith('layout.jsx')) {
        let content = fs.readFileSync(filepath, 'utf-8');
        let newContent = content;
        
        // Remove imports
        newContent = newContent.replace(/import\s+Navbar\s+from\s+['"].*?Navbar.*?['"];?\n?/g, '');
        newContent = newContent.replace(/import\s+Footer\s+from\s+['"].*?Footer.*?['"];?\n?/g, '');
        
        // Remove components
        newContent = newContent.replace(/\s*<Navbar\s*\/>\s*/g, '\n');
        newContent = newContent.replace(/\s*<Footer\s*\/>\s*/g, '\n');
        
        if (content !== newContent) {
            fs.writeFileSync(filepath, newContent, 'utf-8');
            console.log('Cleaned ' + filepath);
        }
    }
});
