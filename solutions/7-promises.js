import fs from 'fs/promises';

// BEGIN
export const reverse = async (file) => {
  const content = await fs.readFile(file, 'utf-8');
  
  const lines = content.split('\n');
  const revers_lines = lines.reverse();
  
  const revers_content = revers_lines.join('\n');
  await fs.writeFile(file, revers_content);
};
// END