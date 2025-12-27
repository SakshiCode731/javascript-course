console.log(document.cookie)
document.cookie = "name=sakshi12334"
document.cookie = "name2=sakshi12334"
document.cookie = "name=sakshi"  //it is called setcall
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}` //it is called setcall
console.log(document.cookie)