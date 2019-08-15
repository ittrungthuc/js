var quare = (a, b, h) => (a + b) * h / 2;



let add = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('a hoặc b không phải là số.'));
        }
        return callback(undefined, (a + b));
    }, 1000)
}
add(5, 'thuc', (err, result) => {
    if (err) console.log('loi:' + err);
    else console.log('result:' + result);

})