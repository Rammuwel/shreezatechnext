const fs = require('fs');
const path = require('path');

const directories = ['src/components', 'src/app'];
let filesToCheck = [];

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

directories.forEach(dir => {
    filesToCheck = filesToCheck.concat(walk(dir));
});

const colorCounts = {};

filesToCheck.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');
    const regex = /(text-\[#[a-fA-F0-9]{3,8}\]|text-[a-z]+-[0-9]{2,3}|text-white|text-black|text-transparent)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const color = match[1];
        colorCounts[color] = (colorCounts[color] || 0) + 1;
    }
});

const sorted = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
console.log(JSON.stringify(sorted, null, 2));
