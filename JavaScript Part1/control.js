// if

const isUserloggedIn = true;
 


if (isUserloggedIn) {
    console.log("welcome to the website")
}


const score = 200;

if(score > 100){
    console.log("you are a pro gamer")
}else if(score > 50){
    console.log("you are a good gamer")
}else{
    console.log("you are a noob gamer")
}                           



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if(userLoggedIn && debitCard){
    console.log("you can buy the prooduct!");
}

if(userLoggedIn || loggedInFromGoogle){
    console.log("yess!");
}


// ***** switch case *****
// switch case is used to check multiple conditions
// switch case is used to check the value of a variable or expression

const month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Invalid month");
}

