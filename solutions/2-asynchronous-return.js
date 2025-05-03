import fs from 'fs';

// BEGIN
export default async = (file, data, callback) => {
    fs.writeFile(file, data, 'utf-8', (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  }
// END
