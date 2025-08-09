// **** truthy.js ******

const { use } = require("react");

const userEmail = "kaifuuu@apple.com";

if(userEmail){
    console.log("Got User Email");
} else {
    console.log("Dont have email");
}


// This is a truthy value example for true or falsyy values

// false, 0, -0, BigInt 0n, "", NaN, null, undefined are falsy values   

// all other values are truthy values
// for e.g. "0", "false", [], {}, function(){} are truthy values


if (userEmail.lemgth === 0){
    console.log("Email is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");

    console.log("Object is completely empty");
}