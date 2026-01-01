class Animal {
  constructor(name, color){
    this.name = name
    this.color = color
  }
  run(){
    console.log(`${this.name} + is running!`)
  }
  shout(){
    console.log(this.name + "is barking!")
  }
}

class Monkey extends Animal {
  eat(){
    console.log(`${this.name}  is eating banana`)
   }
   hide(){
    console.log(`${this.name}is hiding`)
   }
}

class Duck extends Animal {
  swim(){
    console.log(`${this.name} is swiming`)
  }
}

let ani = new Animal("Bruno ", "white")
let mon = new Monkey("Chimpu ", "orange")
let duc = new Duck("Hasan", "yellow")

ani.shout()
mon.eat()
mon.hide()
duc.swim()
// ani.hide()// this this will throw error