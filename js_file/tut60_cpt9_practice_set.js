const loadScript = async (src) => {
  return new Promise((resolve,reject) => {
    let script = document.createElement("script")
    script.src = src
    script.onload = ()=>{
      resolve(src + " Done success")
    }
    document.head.append(script)
  })
}
// const main2 = async () =>{
//   console.log(new Date().getMilliseconds())
//   let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
//   console.log(a)
//    console.log(new Date().getMilliseconds())
// }
// main2()

//Question 2
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js ")
// a.then((value) => {
//   console.log(value)
// })

//Question 3
// let p = ()=>{
//   return new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//       reject(new Error("Please this is not acceptable"))
//     },3000)
//   })
// }

// let a= async ()=>{
//   try{
//       let c = await p()
//       console.log(c)
//   }
//   catch (error){
//     console.log("this is has been handled")
//   }

// }
// a()

//Question 4
let p1 = async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(10)
    },2000)
  })
}

let p2 = async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(20)
    },1000)
  })
}

let p3 = async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(30)
    },3000)
  })
}

const run = async()=>{
  console.time("run")
  // let a1 = await p1() //fetch first 10 product from the database
  // let a2 = await p2() //fetch another 10 products from the database
  // let a3 = await p3() // fetch yet another 10 products from the database

  let a1 = await p1() //fetch first 10 product from the database
  let a2 = await p2() //fetch another 10 products from the database
  let a3 = await p3() // fetch yet another 10 products from the database
  let a1a2a3 = await Promise.all([a1,a2,a3])
  console.log(a1a2a3)
  // console.log(a1,a2,a3)
  console.timeEnd("run")
}
run()