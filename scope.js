// learning about Scopesssss

// local or global Scope


/*
var c = 300;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a);
console.log(b);
console.log(c);


*/

// ***********Scope Level and Mini Hoisting **********

function one(){
    const username = "kaifyyy"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    console.log(website);

    two()

}

one() 