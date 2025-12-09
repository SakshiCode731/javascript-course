// chapter 4 - practice Set
let str = "Har\""
console.log(str.length)

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
console.log(sentence.includes(word))

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

//practice question -2
const str1 = "Cats are the best!"
console.log(str1.endsWith("best",17 ))
console.log(str1.startsWith("Cats"))

//practice questin -3
const str2 = "SAKSHI"
console.log(str2.toLowerCase())

//practice question -4
let str3 = "please give Rs 1000"
let amount = Number.parseInt(str3.slice("15"))  // convert into number
console.log(amount)
console.log(typeof amount)

//Practice Question - 5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) //friend is not changed beacause string are immutable

