const fs = require('fs');
const path = require('path');

const directories = ['src/components', 'src/app'];
let filesToCheck = [];

function walk(dir) {
    let results = [];
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
    if (fs.existsSync(dir)) {
        filesToCheck = filesToCheck.concat(walk(dir));
    }
});

function updateClassString(classStr) {
    if (!classStr.includes('bg-[#ffb916]')) return classStr;
    
    // Ignore non-buttons
    if (classStr.includes('mix-blend-screen') || classStr.includes('selection:') || 
        classStr.includes('w-12 h-1') || classStr.includes('w-16 h-1') || 
        (classStr.includes('rounded-full') && classStr.includes('absolute')) ||
        classStr.includes('text-[#ffb916]') && classStr.includes('bg-[#ffb916]/10')) {
        return classStr;
    }
    
    let classesToRemove = [
        'hover:bg-[#0A3A7A]', 'hover:text-white', 'hover:bg-white', 'hover:text-[#0A3A7A]',
        'hover:bg-transparent', 'hover:border-[#0A3A7A]', 'border-[#ffb916]', 'border', 'border-2',
        'hover:border-[#154EA1]', 'hover:text-[#154EA1]'
    ];
    
    let classList = classStr.split(/\s+/).filter(c => c);
    
    // Check if it's actually a hoverable interactive element by checking if it had one of our target hovers
    const hasHover = classList.some(c => c.startsWith('hover:bg-'));
    if (!hasHover && !classStr.includes('transition')) return classStr;
    
    classList = classList.filter(c => !classesToRemove.includes(c));
    
    let idx = classList.indexOf('bg-[#ffb916]');
    if (idx !== -1) {
        classList.splice(idx + 1, 0, 'border-2', 'border-[#ffb916]', 'cursor-pointer');
        classList.push('hover:bg-transparent', 'hover:border-[#154EA1]', 'hover:text-[#154EA1]');
        return classList.join(' ');
    }
    
    return classStr;
}

filesToCheck.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf8');
    
    let newContent = content.replace(/className="([^"]*)"/g, (match, classStr) => {
        if (classStr.includes('bg-[#ffb916]') && (classStr.includes('hover:bg-') || classStr.includes('hover:text-'))) {
            const newClassStr = updateClassString(classStr);
            return `className="${newClassStr}"`;
        }
        return match;
    });
    
    // also support template literals className={`...`}
    newContent = newContent.replace(/className=\{`([^`]*)`\}/g, (match, classStr) => {
         if (classStr.includes('bg-[#ffb916]') && (classStr.includes('hover:bg-') || classStr.includes('hover:text-'))) {
            const newClassStr = updateClassString(classStr);
            return `className={\`${newClassStr}\`}`;
        }
        return match;
    });
    
    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent, 'utf8');
        console.log(`Updated ${filepath}`);
    }
});
