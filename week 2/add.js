// app.js
import { add, PI } from './math.js';
console.log(add(2, 3)); 
console.log(PI*2*3/7)
// code
let student = {
  name: "Dipayan",
  age: 21,
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

student.greet(); 