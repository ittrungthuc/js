var fs = require('fs');
let readfile = (filename) => {
    return new Promise((resolve, reject) => {
        return fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) return reject(err);
            else resolve(data);
        })
    })
}
readfile('file.txt')
    .then(data => console.log(data), err => console.log(err));
