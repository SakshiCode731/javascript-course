console.log(console)
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" !=false)
console.assert("err" ==false)

console.time("forLoop")
for(let i =0;i<5;i++){
 console.log(233)
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i = 0;
while(i<5){
  console.log(233)
  i++;
}
console.timeEnd("whileLoop")