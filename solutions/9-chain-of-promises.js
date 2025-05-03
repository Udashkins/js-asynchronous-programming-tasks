import fs from 'fs/promises';

// BEGIN
export const getTypes = async (filepaths) => {
  const promises = filepaths.map(async (filepath) => {
    try {
      const stats = await fs.stat(filepath);
      return stats.isDirectory() ? 'directory' : 'file';
    } catch (error) {
      return null;
    }
  });

  return Promise.all(promises);
};
// END