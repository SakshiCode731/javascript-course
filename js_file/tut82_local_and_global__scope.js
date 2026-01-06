// {
//   var a = 8; // var has global scope and var has block scope
// }
// console.log(a)

let p = 9
function ax(){
  let a = 8;
  console.log(p)
  console.log(a)
}
ax()
console.log(a)
console.log(p)