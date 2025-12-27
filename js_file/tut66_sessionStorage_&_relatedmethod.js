// sessionStorage.setItem("name", "sakshi")
// sessionStorage.getItem("name")
// sessionStorage.removeItem("name")
// sessionStorage.clear()

//Storage Event
window.onstorage = (e)=>{
  alert("changed")
  console.log(e)
}
