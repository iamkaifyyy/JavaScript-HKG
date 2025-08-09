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
