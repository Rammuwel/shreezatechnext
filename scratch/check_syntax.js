const fs = require('fs');
const { parse } = require('@babel/parser');
const code = fs.readFileSync('src/app/solutions/healthcare/page.jsx', 'utf8');

try {
  parse(code, {
    sourceType: 'module',
    plugins: ['jsx']
  });
  console.log("Syntax is valid");
} catch (e) {
  console.error("Syntax error:", e.message);
}
