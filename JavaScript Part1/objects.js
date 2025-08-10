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









// *********** Destructuring Objects and JSON API


// this is for objects

const course = {
    coursename: "JS Hindi",
    price: "999",
    courseInstructor: "kaifuuu"
}


// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);


const {price: rate} = course;

console.log(rate);


const navbar = () => {

}

navbar(company = "kaifyyy") 



// API Concepts


[
    {},
    {},
    {}
]


{ 
    {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
}