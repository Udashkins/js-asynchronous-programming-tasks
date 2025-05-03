import fs from 'fs/promises';

// BEGIN
export const exchange = async (file1, file2) => {
  const [content1, content2] = await Promise.all([
    fs.readFile(file1, 'utf-8'),
    fs.readFile(file2, 'utf-8'),
  ]);

  await Promise.all([
    fs.writeFile(file1, content2),
    fs.writeFile(file2, content1),
  ]);
};
// END