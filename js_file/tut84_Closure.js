// closure is a function along with lexical environment

// message = "Good Global"
// function hello(){
//   let message = "Good Morning"
//   {
//     let message = "Good Afternoon" // only vaalid in this block after that upper good morning print
//     console.log("Hello1: " + message)
//   }
//   let c = function hello2(){
//     console.log("I am c " + message)
//   }
//   return c
// }
// c = hello()
// c()

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Sakshi" // return reference of function
  return displayName;
}

function returnfunc(){
const x = ()=>{
  let a = 1
  console.log(a)
  const y = ()=>{
    // let a = 2
    console.log(a)
    const z = ()=>{
      // let a = 3
      console.log(a)
    }
    z()
  }
  a = 999
  y()
}
x()
}
let a = returnfunc()
a()
// let c = init();
// c()