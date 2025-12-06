const prompt = require("prompt-sync")();

let a = prompt("Hey what's your age? ");
a = Number.parseInt(a);

// if (a > 0) {
//     console.log("This is a valid age");
// } else {
//     console.log("This is invalid age");
// }

if(a<0){
  console.log("This is an invalid age")
}
else if(a<9){
  console.log("You are  a kid and you cannnot even think of driving");

}else if(a<13 && a>=9){
  console.log("you are a kid and can think of driving after 18");
}
else{
  console.log("You can now drive as you are above 18");
}
console.log("Done")
console.log("you can ", (a<18? "not drive": "drive"))

//switch-statement
const expr = '1';
switch(expr){
  case '2':
    console.log("it is case 2");
    break;
  case '3':
    console.log("it is case 3");
    break;
  case '1':
    console.log("it is case 1");
    break;
  default:
    console.log("This is default statement");
}