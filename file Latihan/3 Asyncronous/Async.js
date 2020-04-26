/*
const second = () => {
    console.log('Second');
}

const first = () => {
    console.log('First');
    second();
    console.log('The End')
}

first();
*/

/*
const second = () => {
    const num = 10;
    setTimeout(() => {
        console.log('Second');
        console.log(num);
    }, 2000, num)
}

const first = () => {
    console.log('First');
    second();
    console.log('The End')
}

first();
*/


//callback hell, artinya jika asyn/setTimeoutnya puluhan, maka akan membuat
//code kita menjadi rumit.
/*
const second = () => {
    const num = 10;
    setTimeout(() => {
        console.log('Async 1');
        console.log(num);
        setTimeout(() => {
            console.log('Async 2');
            setTimeout(() => {
                console.log('Async 3');
            }, 2000)
        }, 2000)
    }, 2000, num)
}

const first = () => {
    console.log('First');
    second();
    console.log('The End')
}

first();
*/

/*
//promise, untuk mengatasi callback hell maka dibuatlah promise
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const error = true;
            if (error){
                reject('Success');
            }else{
                resolve('Error');
            }
        }, 2000)
    })
    
}

getData()
    .then(success => console.log(success))
    .catch(error => console.log(error))
*/

/*
//Metode Chaining, 
//output dari promise sebelumnya menjadi input dari promise berikutnya
const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const error = false;
            if (error){
                reject('Success');
            }else{
                resolve(10);
            }
        }, 2000)
    })
    
}

const getName = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`ID : ${id} Success`)
        }, 2000)
    })
}

getData()
    .then(id => getName(id))
    .then(success => console.log(success))
    .catch(error => console.log(error))
*/

//Async & Await
/*cara yang lebih mudah untuk menggunakan Promise adalah dengan 
menggunakan Async dan Await. */

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const error = false;
            if (error){
                reject('Error!!!');
            }else{
                resolve(10);
            }
        }, 2000)
    })
    
}

const getName = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`ID : ${id} Success`)
        }, 2000)
    })
}

/*
format async funtion :
async function namaFunction{

}
*/

/*
//sbgai contoh menggunakan arrow funtion :
const getNameById = async() => {
    try {
        const id = await getData();
        const success = await getName(id);
        console.log(success);
    } catch (error) {
        console.log(error);
    }
}

getNameById();
*/

/*jika ada return value maka :  */
const getNameById = async() => {
    let id, success;
    try {
        id = await getData();
        success = await getName(id);
    } catch (error) {
        console.log(error);
    }
    return success;
}

getNameById().then(result => console.log(result));