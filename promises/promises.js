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

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("Final! the promise is either solved or rejected!");
});



// promise - 5 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "javascript", password: "123"});
        } else {
            reject('error! JS went wrong');
        }
    }, 1000);
});


async function consumePromiseFive() {
    // const response = await promiseFive;
    // console.log(response);

    try {
        const response = await promiseFive;
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();

/// JSON - API request

async function getAllUsers(){
    const response = await fetch('https://api.github.com/users/iamkaifyyy'); 
}
