//Arrays Mehtod
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now string    convert array into String
console.log(b)

let c = num.join(" and ") //join method join element with and other also
console.log(c, typeof c)

num.pop() // pop last element
console.log(num)

let r = num .pop() // pop returns the popped element
console.log(num ,r)

let r1 = num.push(56) //push returns the new array length
console.log(num ,r1)

let r2 = num.shift()
console.log(r2, num) //Removes element fron the start of the array

let r3 = num.unshift(78)
console.log(r3, num)//add element to the beggining and add new array length