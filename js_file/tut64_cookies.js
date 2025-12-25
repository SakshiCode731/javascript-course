console.log(document.cookie)
document.cookie = "name=sakshi12334"
document.cookie = "name2=sakshi12334"
document.cookie = "name=sakshi"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${(key)} = ${(value)}`
console.log(document.cookie)