// ******** array 2 for JavaScript *****


const marvel = ["thor", "ironman", "spiderman"];

const dc = ["superman","batman", "joker"];

marvel.push(dc);

console.log(marvel);

console.log("concatenating the arrays");

marvel.concat(dc);
console.log(marvel);


console.log("Using Spread method");

const all_heroes = [...marvel, ...dc];

console.log(all_heroes);



console.log(Array.isArray("Kaifyyy"));


console.log(Array.from("kaifyyyy"));


const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]];

const real_another_array = another_array.flat(Infinity);

console.log("running real another array");
console.log(real_another_array);



