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
person1.eat
