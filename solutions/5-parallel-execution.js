import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirpath, callback) => {
  fs.readdir(dirpath, (err, filenames) => {
    if (err) {
      callback(err);
      return;
    }

    const filepaths = filenames.map(filename => path.join(dirpath, filename));

    async.map(filepaths, fs.stat, (err, stats) => {
      if (err) {
        callback(err);
        return;
      }

      const fileSizes = stats
        .filter(stats => stats.isFile())
        .map(stats => stats.size);

      const totalSize = _.sum(fileSizes);

      callback(null, totalSize);
    });
  });
};
// END
