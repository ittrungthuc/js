var fs = require('fs');

console.log('start');
fs.readFile('text1.txt', { encoding: 'utf8' }, (err, data) => {
    console.log('err:' + err);
    console.log('data:' + data);
});
console.log('end');