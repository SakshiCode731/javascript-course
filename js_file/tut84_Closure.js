message = "Good Global"
function hello(){
  let message = "Good Morning"
  {
    let message = "Good Afternoon" // only vaalid in this block after that upper good morning print
    console.log("Hello1: " + message)
  }
  let c = function hello2(){
    console.log("I am c " + message)
  }
  return c
}
c = hello()
c()