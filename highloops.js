// for of loop 

const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//     console.log(i);
// }


// for string values

// const greetings = "Hello World";

// for (const greet of greetings){
//     if (greet === " " ){
//         console.log("Space also used");
//     }
//     console.log(`each character is ${greet}`);

// }

// Map 

const map = new Map();

map.set('In','India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');    

console.log(map);


for (const [key,value] of map){
    console.log(key);
}


// for each loop 


const coding = ["js", "ruby", "python","java", "cpp"];

