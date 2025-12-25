let p = fetch("https://goweather.xyz/weather/Ny")
p.then((response) =>{
  console.log(response.status)
  console.log(response.ok)
  console.log(response.headers)
  // console.log(response.text())
  return response.json() //value resolve to json promises
}).then((value2) =>{
  console.log(value2)
})

// let res = fetch("https://www.flipkart.com", {
//   headers: {
//     Authorization: "Bearer secret"
//   }
// }); // syntax of requset header

