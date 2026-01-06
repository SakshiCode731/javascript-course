let arr = [3, 5, 8, 9, 12,14] // remaing element of rest are in array
// No need to do this:
// let a = arr[0]
// let b = arr[1]
// let [a,b,c,d, ...rest] = arr
// let [a, , , ...rest] = arr
// console.log(a, rest)
let {a, b} = { a:1, b:5}
// console.log(a, b)

//Spread Operator
let arr1 = [3, 5, 8]
let obj1 = {...arr1 }
console.log(obj1)

function sum(v1, v2, v3){
  return v1 + v2 + v3
}

console.log(sum(...arr1))

let obj2 = {
  name: "Harry",
  company:"Company xyz",
  address:"xyz"
}

// console.log({ ...obj2, name: "sakshi", company: "ABC"})
console.log({name: "Sakshi", company: "ABC", ...obj2})// this will print the obj2 object without changing any value
