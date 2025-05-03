import fs from 'fs/promises';

// BEGIN
export const touch = async (file) => {
    try {
      await fs.access(file);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.writeFile(file, '');
      } else {
        throw error;
      }
    }
  };
// END
