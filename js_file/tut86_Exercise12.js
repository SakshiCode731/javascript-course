const a = async (text, n=2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    },1000*n)
      
  })
}
(
  async() => {
    let text = await a("Hello...")
    console.log(text)
    text = await a("world!")
    console.log(text)
  }
)()

function sum(a, b, c, d){
  return a + b + c + d
}
let x = [1, 3, 5, 7]
console.log(sum(...x));

(async() => {
    let text = await a("I am resolving after 1 second", 1)
    console.log(text)
    text = await a("I am resolving after 3 seconds", 3)
    console.log(text)
  }
)()

function  simpleInterest(p, q, r) {
  return (p * q * r)/100;
}
console.log(simpleInterest(1000000, 5 , 1))