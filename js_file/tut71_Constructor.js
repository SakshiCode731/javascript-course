class RailwayForm{
  constructor(givenname,trainno,trainname){
    console.log("CONSTRUCTOR CALLED...."  + givenname + " " + trainno + " " +trainname)
    this.name = givenname
    this.trainno = trainno
    this.trainname = trainname
  }
  submit(){
    alert(this.name +   ": Your Form is Submitted for train no. "
       + this.trainno + " of  name is "  + this.trainname)
  }
  cancel(){
    alert(this.name + ": This form is cancelled for train no. " + this.trainno + " of name is " + this.trainname)
  }
}

//create and fill form for sakshi
let sakshiForm = new RailwayForm("Sakshi", 145316, "Gitajali Express")
//no need to fill the  form with sakshi's details
// sakshiForm.fill("Sakshi", 145316, "Gitajali Express")

//create and fill a  form for rohan
let rohanForm1 = new RailwayForm("Rohan", 222420, "Maharastra Express")
let rohanForm2 = new RailwayForm("Rohan", 229211, "Vidarbh Express")


sakshiForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()