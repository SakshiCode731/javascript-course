class RailwayForm{
  submit(){
    alert(this.name +   ": Your Form is Submitted for train no. "
       + this.trainno + " of  name is "  + this.trainname)
  }
  cancel(){
    alert(this.name + ": This form is cancelled for train no. " + this.trainno + " of name is " + this.trainname)
  }
  fill(givenname, trainno, trainname){
    this.name = givenname
    this.trainno = trainno
    this.trainname = trainname
  }
}

//create a form for sakshi
let sakshiForm = new RailwayForm()
//create a form with sakshi's details
sakshiForm.fill("Sakshi", 145316, "Gitajali Express")

//create a form for rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
//create a form with rohan's details
rohanForm1.fill("Rohan", 222420, "Maharastra Express")
rohanForm2.fill("Rohan", 229211, "Vidarbh Express")

sakshiForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()