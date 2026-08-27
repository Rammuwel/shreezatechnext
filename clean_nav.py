import os
import re

directory = r'c:\Users\shrir\shreezatech\src\app'
for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.jsx') and file != 'layout.jsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            # Remove imports
            new_content = re.sub(r'import\s+Navbar\s+from\s+[\'\"].*?Navbar.*?[\'\"];?\n?', '', new_content)
            new_content = re.sub(r'import\s+Footer\s+from\s+[\'\"].*?Footer.*?[\'\"];?\n?', '', new_content)
            
            # Remove components
            new_content = re.sub(r'\s*<Navbar\s*/>\s*', '\n', new_content)
            new_content = re.sub(r'\s*<Footer\s*/>\s*', '\n', new_content)
            
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Cleaned {filepath}')
