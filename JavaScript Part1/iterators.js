// ***** iterators.js *****

// aka Loops

// for loop

for (let i = 0; i <= 10; i++) {
  const element = i;

  if (element === 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

// nested for loop

for (let i = 0; i <= 10; i++) {
  console.log(`Outerloop : ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Innerloop : ${j} and inner loop is ${i}`);

    console.log(i + '*' + j + '='+ i * j);

  }
}

// break and continue 

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`Detected 5, ${index}`);
        break;
    }  
    console.log(`value of i is ${index}`);

}


// continue - skip one time statement



// while loop 

let index = 0;
while(index <= 10){
    console.log(`value of i is ${index}`);
    index = index + 2;

}


let myArray = ['flash','batman', 'superman']

let arr = 0;
while(arr < myArray.length) {
    console.log(`Value of arr is ${myArray[arr]}`);

    arr = arr + 1; 


}

// do while loop 

let score = 1;

do {
    console.log(`Score is ${score}`);
    score = score + 1;
} while ( score <= 10){
    console.log(`Score is ${score}`);
    score = score + 1;      
}




// ********* high order Array Loops *******


// forof


let myArray = ['flash', 'batman', 'superman'];
