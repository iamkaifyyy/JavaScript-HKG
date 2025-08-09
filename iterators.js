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
