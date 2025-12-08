// let name = "Sakshi\"" //here \"  consider one character
let name = "Sakshi"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))
console.log(name.slice(2))
console.log(name.replace("shi", "chu"))

let name1 = "sakshi"
let name2 = " piu"
console.log(name1.concat(" is friend of ",name2, " yes"))

let name3 = "        kriti       "
console.log(name3.trim())

let fr = "Raman" + "Shivika" + "Harry"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
// fr[4] = "o" //not allowed
console.log(fr)


let text = "Hello world!";
console.log(text.repeat(4));
console.log(text.split(" ,"));
