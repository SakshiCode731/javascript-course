let p1 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve("value 1")
  }, 11000);
});

let p2 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    // resolve("value 2")
    reject(new Error("Error in promise 2"))
  }, 2000);
});

let p3 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve("value 3")
  }, 3000);
});

let p4 = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve("value 4")
  }, 4000);
});

// p1.then((value)=>{
//   console.log(value)
// })

// p2.then((value)=>{
//   console.log(value)
// })

// p3.then((value)=>{
//   console.log(value)
// })

// p4.then((value)=>{
//   console.log(value)
// })

// let promise_all = Promise.all([p1, p2, p3, p4]) //if any one promise reject then all promise get reject
// let promise_all = Promise.allSettled([p1, p2, p3, p4]) //gives result of all promise whether resolved or rejected
// let promise_all = Promise.race([p1, p2, p3, p4]) //gives result of first settled promise whether resolved or 
// let promise_all = Promise.any([p1, p2, p3, p4]) //gives result of first resolved promise  
// let promise_all = Promise.resolve(6) //gives result of first resolved promise
let promise_all = Promise.reject(new Error("Some error occured")) //gives result of first rejected promise
promise_all.then((values)=>{
  console.log(values)
})