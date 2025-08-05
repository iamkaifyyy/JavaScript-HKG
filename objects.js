// // learning about Objects


// // function Person(name, age, city) {
// //     this.name = name;
// //     this.age = age;
// //     this.city = city;

// // }


// // singleton - we can generate the constructor objects
 
// const mySym = Symbol("key1")

// const jsuser = {
//     name: "kaifuuu",
//     "fullname": "mohdkaifuuuu",
//     [mySym]: "mykey1",
//     age: 20,
//     city: "Lucknow",
//     email: "kaifuu@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
 

// console.log(jsuser);
// console.log(jsuser.email);
// console.log("diff approach");
// console.log(jsuser["email"]);


// console.log("checking the Symbol works here or not!");

// console.log([mySym]);
// console.log(typeof [mySym]);

//  jsuser.greeting = function(){
//     console.log("hello jsuser boobs");
//  }

//  jsuser.greetingTwo= function(){
//     console.log(`hello jsuser ,${this.name}`);
//  }


//  console.log(jsuser.greeting());
//   console.log(jsuser.greetingTwo());



// Objects Part 2

const tinderUser = new Object() 


tinderUser.id = "123abc"
tinderUser.name = "kaifuuu"
tinderUser.isLoggedIn = false;




console.log(tinderUser);


