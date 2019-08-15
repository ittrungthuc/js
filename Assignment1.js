

function getByName() {

    setTimeout(() => {
        console.log('log__1');
        return 1;
    }, 2000)
}

function getId() {
    setTimeout(() => {
        console.log('log__2');
        return 2;
    }, 1000)
}

async function runApp() {
    let name = await getByName();
    let id = await getId();
    console.log('name:' + name)
    console.log('id:' + id)
}
runApp();
