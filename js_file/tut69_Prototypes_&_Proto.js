let a = {
  name2:"sakshi",
  language: "javascript",
  run:() =>{ //If self method not available it goes to thir protype
    alert("self run")
  }
}
console.log(a)

let p = {
  run:() =>{ //method
    alert("run")
  }
}

p.__proto__  = {
  name: "jackie"
}

a.__proto__= p
a.run()
console.log(a.name)