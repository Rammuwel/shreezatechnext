import os
import re

directories = ['src/components', 'src/app']
files_to_check = []

for directory in directories:
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.tsx'):
                files_to_check.append(os.path.join(root, file))

# We want to replace instances of:
# bg-[#ffb916] text-white (or similar) 
# and hover:bg-[#0A3A7A] (or hover:bg-transparent etc)
# with:
# bg-[#ffb916] border-2 border-[#ffb916] text-white hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]

def update_class_string(class_str):
    if 'bg-[#ffb916]' not in class_str:
        return class_str
    
    # Do not touch things that aren't buttons, e.g., the decorative backgrounds
    if 'mix-blend-screen' in class_str or 'selection:' in class_str or 'w-12 h-1' in class_str or 'rounded-full' in class_str and 'absolute' in class_str:
        return class_str
        
    # We want to update buttons/links
    new_class_str = class_str
    
    # Remove existing conflicting classes
    classes_to_remove = [
        'hover:bg-[#0A3A7A]', 'hover:text-white', 'hover:bg-white', 'hover:text-[#0A3A7A]',
        'hover:bg-transparent', 'hover:border-[#0A3A7A]', 'border-[#ffb916]', 'border', 'border-2',
        'hover:border-[#154EA1]', 'hover:text-[#154EA1]'
    ]
    
    class_list = new_class_str.split(' ')
    class_list = [c for c in class_list if c not in classes_to_remove and not c.startswith('border-') or c == 'border-2'] # strip borders except radius
    
    class_list = [c for c in class_list if c != 'border-2' and c != 'border']
    
    # add our new classes
    # find where bg-[#ffb916] is, and insert after it
    try:
        idx = class_list.index('bg-[#ffb916]')
        class_list.insert(idx+1, 'border-2')
        class_list.insert(idx+2, 'border-[#ffb916]')
        
        # add hover states at the end
        class_list.append('hover:bg-transparent')
        class_list.append('hover:border-[#154EA1]')
        class_list.append('hover:text-[#154EA1]')
        
        return " ".join(class_list)
    except ValueError:
        return class_str

for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find all className="..."
    def replacer(match):
        original = match.group(0)
        class_str = match.group(1)
        if 'bg-[#ffb916]' in class_str and ('hover:bg-[#0A3A7A]' in class_str or 'hover:bg-white' in class_str or 'hover:bg-transparent' in class_str or 'hover:text-white' in class_str or 'hover:text-[#0A3A7A]' in class_str or 'hover:border-[#0A3A7A]' in class_str):
            new_class_str = update_class_string(class_str)
            return f'className="{new_class_str}"'
        return original
        
    new_content = re.sub(r'className="([^"]*)"', replacer, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
