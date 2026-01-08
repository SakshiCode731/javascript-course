const sayHello =   name => {
  console.log("greeting" + "" + name)
  console.log("hi")
}

const x = {
  name: "Sakshi",
  role: "js Developer",
  exp: 30,
  show: function(){
    // let that = this // this act as object which store in that
    // console.log(this)
     //in arrow function this not window object it is only this take from parent because in arrow function use lexical this
    setTimeout(() => {
       
       console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    },2000)
   
  }
}

sayHello(" Sakshi", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()