// let p1 = new Promise((resolve, reject)=> {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value)=>{  
//   console.log(value);
//  let p2 =  new Promise((resolve, reject)=>{
//     setTimeout(() => {resolve("Promise 2") }, 2000);
//   })
//   return p2;
// }).then((value)=>{
//   console.log("we are done")
//   return 2
// }).then((value)=>{
//   console.log("Now we are really done " )
// })

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);  
    script.onload = () => {
      resolve("Script loaded successfully");
    }
    script.onerror = () => {reject(0)}
  })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap1.bundle.min.jss")
p1.then((value)=>{
  console.log(value)
}).catch((error)=>{
  console.log("We are sorry not we are having problems loading this script")
})

