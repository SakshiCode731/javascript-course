// // chapter 2 practise set
// // problem no 1
const prompt = require("prompt-sync")();
let age = prompt("What is your age?")
age = Number.parseInt(age) // Converting the string to a number
if (age > 10 && age < 20)  {
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age doesn't lies between 10 and 20")  }

    // problem no 2
    let age1 = prompt("What is your age?")
    switch (age1) {
        case '12':
            console.log("Your age is 12")
            break
        case '13':
            console.log("Your age is 13")
            break
        case '14':
            console.log("Your age is 14")
            break
        case '15':
            console.log("Your age is 15")
            break
        default:
            console.log("Your age is not special")
    }

// problem no 3
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2 and 3")  
}
else{
    console.log("Your number is not divisible by 2 and 3 ")
}

// problem no 5
let age2 = 19
let a = age2 > 18 ? "You can drive" : "You cannot drive"
console.log(a)