// Following two lines will run successfully due to javascript hoisting
// let a;
console.log(a)
greet()
function greet(){
  console.log("Good Morning")
}
// var greet = () =>{
//   console.log("Good Morning")
// }
// let greet = function(){
//   console.log("Good Morning")
// }
// greet()
var a = 9; // initialization hoisetd to the top but initialization is not
// let a = 9 // it goes to deadzone and not compiler say that initialize it first
//const a = 9  //it goes to deadzone and not compiler say that initialize it first
console.log(a)