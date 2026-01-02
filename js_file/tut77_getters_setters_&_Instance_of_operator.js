class Animal {
  constructor(name) {
  this._name = name
}
fly(){
  console.log("I am Flying")
}
get name(){ //getter
  return this._name
}
set name(newName){ //setter
  this._name = newName
}
}

class Rabbit extends Animal{
  eat(){
    console.log("Eating carrot")
  }
}

let a = new Rabbit("Bruno")
a.fly()
console.log(a.name)
a.name = 'Jack'
console.log(a.name)
let c= 56
console.log(a instanceof Animal)
console.log(a instanceof Rabbit)
console.log( c instanceof Animal)