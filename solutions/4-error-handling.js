import fs from 'fs';

// BEGIN
export const move = (sourcePath, destPath, callback) => {
  fs.readFile(sourcePath, (readErr, data) => {
    if (readErr) {
      callback(readErr);
      return;
    }

    fs.writeFile(destPath, data, (writeErr) => {
      if (writeErr) {
        callback(writeErr);
        return;
      }

      fs.unlink(sourcePath, (unlinkErr) => {
        if (unlinkErr) {
          callback(unlinkErr);
          return;
        }

        callback(null); 
      });
    });
  });
};
// END
