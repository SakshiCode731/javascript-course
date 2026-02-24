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
let a = 0;
while(a<5){
  console.log(233)
  a++;
}
console.timeEnd("whileLoop")