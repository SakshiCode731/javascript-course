let p1 = new Promise((resolve, reject)=> {
  // alert("Hey I an not resolved")
  setTimeout(() => {
    resolve(1)
  }, 2000);
});

p1.then(() => {
  console.log("Hurray")
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(4)
    }, 3000);
  }).then((value) => {
    console.log(value)
  })
})

p1.then(() => {
  console.log("Congrulations this promise is resolved")
})

