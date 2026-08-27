const fs = require('fs');
const path = require('path');

function extractClasses() {
  const dir = 'src/components';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
  console.log("--- Section Classes ---");
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const match = content.match(/<section[^>]*className=["']([^"']*)["']/);
    if(match) {
      console.log(f + ': ' + match[1]);
    }
  });

  console.log("\n--- Primary Headings ---");
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const match = content.match(/<h2[^>]*className=["']([^"']*)["']/);
    if(match) {
      console.log(f + ': ' + match[1]);
    }
  });

  console.log("\n--- Buttons ---");
  files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const match = content.match(/<button[^>]*className=["']([^"']*)["']/);
    if(match) {
      console.log(f + ': ' + match[1]);
    }
  });
}
extractClasses();
