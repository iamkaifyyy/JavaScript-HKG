// ******* arrays *********

// Part-1

const myArr = [0, 1, 2, 3, 4, 5, true, "kaifyyy"];

console.log(myArr[0]);
console.log(myArr[4]);

const myHeroes = ["batman", "ironman"];

const myArr2 = new Array(1, 2, 3, 4);
console.log(`array is ${myArr2}`);


// Array Methods

myArr.push(6, 2);
console.log(myArr);
 
console.log(myArr);
myArr.pop();
console.log(myArr);


// another some methods

console.log(myArr.includes(69));



const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

const my1 = myArr.slice(1, 3);
console.log(my1);
