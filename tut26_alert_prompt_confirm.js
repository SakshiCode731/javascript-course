alert("Enter the value of a!")
let a = prompt("Enter a here", "578")
// document.write(a)
a = Number.parseInt(a)
alert("You entered a of type" + (typeof a))
let write = confirm("Do you want it to write to the page")
if(write){
document.write(a)
}
else{
  document.write("please allow me to write")
}