// learning about Objects


function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

}


// singleton - we can generate the constructor objects



const jsuser = {
    name: "kaifuuu",
    age: 20,
    city: "Lucknow",
    email: "kaifuu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
 

console.log(jsuser);
console.log(jsuser.email);
console.log("diff approach")
console.log(jsuser[email])