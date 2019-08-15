

function bindData(param, callback) {
    var ars = [1, 2, 3, 4, 5];
    return callback(param, ars);
}
function object(param, ars) {
    setTimeout(function () {
        console.log("Hello");
    }, 3000);
    console.log(param, ars);
}

var name = 'trungthuc';
bindData(name, object);




