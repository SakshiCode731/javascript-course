document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes i am running" + (a + b + c))
  a + b
}
setTimeout(sum, 1000, 1, 2, 7)

const sum1 = (a, b) => {
 alert("Yes i am running" + (a + b))
  a + b
}
setInterval(sum1, 4000, 5, 6)

setInterval(() => {
  alert("I am inside of setInterval")
}, 3000)

a = setTimeout(function(){
  alert("I am inside of setTimeout")
} , 5000)

let b = prompt("Do you want to run the settimeout?")
if ("n" == b){
  clearTimeout(a)
}
console.log(a)