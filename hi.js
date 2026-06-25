let name = "Dipayan"
let age = 21
console.log(`My name is ${name} and my age is ${age}`)

console.log(name.length); // 3 ✅ — works fine for ASCII

let emoji = "😀";
console.log(emoji.length); // 2 ❌ — returns 2, not 1! (UTF-16 surrogate pair)
let x;
console.log(x); // undefined — JS set this automatically

let y = null;
console.log(y); // null — we explicitly said "nothing here"

if ("6"==6){
    console.log("OK nigga");
}
if ("6"===6){
    console.log("Not ok nigga");
    
}