// ********* arrow user ****


const user = {
    username: "kaifyyy",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }

}

// user.welcomeMessage()
// user.username = "bond"
// user.welcomeMessage()


// function chai() {
//     let userName =  "kaifuuu";
//     console.log(this.username);
// }

// chai();


// ***** this keyword Code ***


/*
const person1 = {
    name: "Bond....JamesBond",
    favFood: "VodkaMartini",

    sayHello: function() {
        console.log(`the name is ${this.name} and i'd like ${this.favFood} shaken not stirred!`);
    },

    eat: function(){
        console.log(`i want ${this.favFood} `);
    }
}

person1.sayHello();
person1.eat();

*/

// const chai = function(){
//     let username = "kaifuuu",
//     console.log(this.username);

// }


const chai = () => {
    let username = "kaifuuu"
    console.log(this);

}

chai();


// ****** arrow function ******


// const addTwo = (num1 + num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => {
    username: "kaifuuu"
    // here we are returning the object in arrow function.

    // for returning the object value we need to wrap the object in parenthesis , it's neccessary as fuckkk
}



console.log(addTwo(2, 3));