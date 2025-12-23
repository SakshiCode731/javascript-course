setTimeout(()=>{
  console.log("Hacking wifi........ please wait")
},1000)

// console.log(rahul) //after that below settiout not run because of error
try{
    // setTimeout(()=>{
    //   try{
    //      console.log(rahul)
    //     }catch(error){
         
    //     }
     
    // },100) //handle inside settimeout error
      setTimeout(()=>{
      console.log(rahul)
    },100)  //it throw error beacuse it is not inside the try catch block
}
catch(error){
  console.log("error done" + error)
}
setTimeout(()=>{
  console.log("Fetching username and password........ please wait")
  
},1000)

setTimeout(()=>{
  console.log("Hacking Rahul's facebook id........please wait")
},3000)

setTimeout(()=>{
  console.log("Username and password of Rahul (+913567891234) fetched........please wait")
},4000)