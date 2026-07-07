const obj = { name: "Raj", age: 21 };

for (const key in obj) {
  console.log(key, obj[key]);
}
// map and filter, together
let result = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0) 
  .map(n => n * 2);            

console.log(result); 
//map dictionaty
let map = new Map();
map.set("Hehe", "Dipayan");
map.set("I duno","how to sleep");
map.set("1230","456");
console.log(map.get("1230"));

for (let [key, value] of map) {
  console.log(key, "→", value);
}
// indexing
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"
console.log(fruits.length);
//set
console.log("Set is js")
let myset = new Set([1,2,3,2,1]);
console.log(myset);
console.log(myset.size); 
console.log(myset.add(4));
console.log(myset.has(2)); 
console.log(myset.delete(1));
//destrcuturing
let [first, , , third] = [10, 20, 30,40];
console.log(first +"and"+third)