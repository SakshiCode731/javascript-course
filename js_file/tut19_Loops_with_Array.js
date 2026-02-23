let num = [3, 54, 1, 2, 4]

// for(i = 0; i<num.length; i++)
//   console.log(num[i])

// for each loop
num.forEach((element) => {
  console.log(element * element)
})

//Array.from
let name = "Sakshi"
let arr = Array.from(name) // make string from array
console.log(arr)

//for...of
for (let item of num){
  console.log(item)
}

//for...in
for (let i in num){
  console.log(num [i]) //it will print index and when we add i print element
}
