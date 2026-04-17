import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const uiComponents = new Set([
  'Accordion', 'Alert', 'AlertDialog', 'AspectRatio', 'Avatar', 'Badge',
  'Breadcrumb', 'Button', 'Calendar', 'Card', 'Carousel', 'Chart', 'Checkbox',
  'Collapsible', 'Command', 'ContextMenu', 'Dialog', 'Drawer', 'DropdownMenu',
  'Form', 'HoverCard', 'Input', 'InputOTP', 'Label', 'Menubar', 'NavigationMenu',
  'Pagination', 'Popover', 'Progress', 'RadioGroup', 'Resizable', 'ScrollArea',
  'Select', 'Separator', 'Sheet', 'Sidebar', 'Skeleton', 'Slider', 'Sonner',
  'Switch', 'Table', 'Tabs', 'Textarea', 'Toggle', 'ToggleGroup', 'Tooltip',
  'UseMobile', 'Utils'
]);

walkDir('./src', function(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = content.replace(/from\s+['"]((?:\.\/|\.\.\/)*ui\/|@\/components\/ui\/)([a-zA-Z0-9-]+)['"]/g, (match, prefix, componentName) => {
    // If the component name has uppercase letters, lower it for Shadcn components
    if (/[A-Z]/.test(componentName)) {
      return `from '${prefix}${componentName.toLowerCase()}'`;
    }
    return match;
  });
  if (content !== replaced) {
    fs.writeFileSync(filePath, replaced, 'utf8');
    console.log('Fixed', filePath);
  }
});
