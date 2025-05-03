import fs from 'fs';

// BEGIN
export default watch = (file, period, callback) => {

    let lastModifiedTime = null;
    
    const timerId = setInterval(() => {
        fs.stat(file, (err, stats) => {
            if (err) {
                clearInterval(timerId);
                callback(err);
                return;
            }
        
            const currentModifiedTime = stats.mtimeMs;

            if (lastModifiedTime === null) {
                lastModifiedTime = currentModifiedTime;
            } else if (currentModifiedTime > lastModifiedTime) {
                callback(null);
                lastModifiedTime = currentModifiedTime;
            }
        });
    }, period);
    
    return timerId;
};

// END
