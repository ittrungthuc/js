
let sum = (a, b) => {
    return new Promise((resolve, reject) => {
        if (typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('a or b not is number'));
        }
        resolve(a + b);
    })
}
sum(1, 2)
    .then(res => sum(res, 6))
    .then(result => console.log(result))
    .catch(err => console.log(err))