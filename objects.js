// // // learning about Objects


// // // function Person(name, age, city) {
// // //     this.name = name;
// // //     this.age = age;
// // //     this.city = city;

// // // }


// // // singleton - we can generate the constructor objects
 
// // const mySym = Symbol("key1")

// // const jsuser = {
// //     name: "kaifuuu",
// //     "fullname": "mohdkaifuuuu",
// //     [mySym]: "mykey1",
// //     age: 20,
// //     city: "Lucknow",
// //     email: "kaifuu@google.com",
// //     isLoggedIn: false,
// //     lastLoginDays: ["Monday", "Saturday"]
// // }
 

// // console.log(jsuser);
// // console.log(jsuser.email);
// // console.log("diff approach");
// // console.log(jsuser["email"]);


// // console.log("checking the Symbol works here or not!");

// // console.log([mySym]);
// // console.log(typeof [mySym]);

// //  jsuser.greeting = function(){
// //     console.log("hello jsuser boobs");
// //  }

// //  jsuser.greetingTwo= function(){
// //     console.log(`hello jsuser ,${this.name}`);
// //  }


// //  console.log(jsuser.greeting());
// //   console.log(jsuser.greetingTwo());



// // Objects Part 2

// const tinderUser = new Object() 


// tinderUser.id = "123abc"
// tinderUser.name = "kaifuuu"
// tinderUser.isLoggedIn = false;



// // const regularUser = {
// //     email: "some@google.com",
// //     fullname: {
// //         userFullName: {
// //             firstName : "kaifuuu",
// //             lastName : "mohd",
// //             age: {
// //                 umar: 21
// //             }
// //         }
// //     }
// // }

// // console.log(regularUser.fullname.userFullName.firstName);


// // console.log(regularUser.fullname.userFullName.lastName);


// // console.log(regularUser.fullname.userFullName.age);



// // ************** OBejcts Part 2 **********

// /*
// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};

// // const obj3 = { obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2)


// console.log(obj3);

// */

// const target = {a: "1", b: "2"};
// const source = {b: "4", c: "5"};

// const returnedTarget = Object.assign(target, source);

// console.log(target);

// console.log(returnedTarget == target);



// console.log("Objects key, values, pair");

// console.log(Object.keys(target));


// console.log(Object.entries(tinderUser));









// 