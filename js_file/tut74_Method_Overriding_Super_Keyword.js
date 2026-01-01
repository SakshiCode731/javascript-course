class Employee {
  login(){
    console.log(`Employee has logged in`)
  }

  logout(){
    console.log(`Employee has logged out`)
  }

requestLeaves(leaves) {
  console.log(`Employee has requested ${leaves} leaves - Auto approved`) // Auto approved called by programmer method
}
}

class Programmer extends Employee {
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) { 
    super.requestLeaves(4)
    console.log("One extra is granted")
  // console.log(`Employee has requested ${leaves+1} leaves (one extra)`) // called overriding method

}
}

let e = new Programmer()
e.login()
e.requestLeaves(3)