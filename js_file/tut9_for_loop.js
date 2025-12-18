// // program to add first n natural numbers
const prompt = require("prompt-sync")();
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for(let i = 0; i<n; i++){
  sum += (i+1)
  console.log((i+1), "+")
}
console.log("Sum of first"  +  n  +  "natural numbers" + sum)
console.log(i) // reference error because it use let  if we use var here it run

// // factorial number
let number = prompt("Enter the Number")
number = Number.parseInt(number)
let fact = 1;

for (let i = 1; i <= number; i++) {
    fact = fact * i;
}
console.log("Factorial of " + number + " is:", fact);

// for in loop
let obj = {
  sakshi:99,
  shristi:90,
  shivika:89,
  sneha:85
}
for (let a in obj){
  console.log("marks of " + a + " are " + obj[a])
}

// //for of loop
for (let b of "Harry"){
  console.log(b)
}