const obj = { name: "Raj", age: 21 };

for (const key in obj) {
  console.log(key, obj[key]);
}
// map and filter, together
let result = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0) 
  .map(n => n * 2);            

console.log(result); 