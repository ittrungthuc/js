

let pro = new Promise((resolve, reject) => {
    // resolve('oke')
    setTimeout(() => {
        reject(new Error('khong the thuc hien'));
    }, 2000)

})
pro.then((mes) => console.log('msg:' + mes),
    (err) => console.log('err:' + err)
);
