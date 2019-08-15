const axios = require('axios');
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('oke'), 1000);
    //setTimeout(() => reject(new Error('no Hope!')), 1000);
});
promise.then(
    result => console.log(result),
    error => console.log(error),
);
function getJSON() {

    // To make the function blocking we manually create a Promise.
    return new Promise(function (resolve) {
        axios.get('https://tutorialzine.com/misc/files/example.json')
            .then(function (json) {
                resolve(json);
            });
    });
}

async function fucAsync() {
    let json = await axios.get('https://tutorialzine.com/misc/files/example.json');
    return json;
}
fucAsync().then(function (result) {
    console.log(result)
});


// var data = getJSON();
// data.then(
//     result => console.log(result),
//     error => console.log(error),
// )