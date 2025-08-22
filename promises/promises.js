// ******* promises in JS *******

console.log("promises");
 

const promiseOne = new Promise(function(resolve, reject){
    // do an async tasks, crytography
    setTimeout(function(){
        console.log('async task is completed');
        resolve();

    }, 1000);
}) 

promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async tasks 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async 2 resolved!")
})



const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "jamesbond", email: "kaif@jamesbond.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "kaifyy", password: "123"});
        } else {
            reject('ERROR! something went wrong');
        }
    }, 1000);
})

// callback hell 

promiseFour.then((user) => {
    
})