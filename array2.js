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
