import fs from 'fs';

// BEGIN
export default async = (file) => {
    const callback = (_error, data) => console.log(data);
    fs.readFile(file, 'utf-8', callback);

}
// END
