const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        // resolve('This is my other resolved data'); Will be ignored when called 2nd
        resolve({
            name: 'Anjali',
            age: 19
        });
        // reject('Something went wrong');
    }, 5000);    
});

console.log('before');

promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);    
    });
    
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ' , error);
});

console.log('after');