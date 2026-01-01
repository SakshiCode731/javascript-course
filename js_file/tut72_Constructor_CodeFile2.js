class RailwayForm{
  constructor(givenname, trainno, address){
    console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
    this.name = givenname
    this.trainno = trainno
    this.address = address
  }
  
preview(){
  alert(this.name + ": Your form is for train number:  " + this.trainno + " and your addres is " + this.address)
}

  submit(){
    alert(this.name + ": Your form is submitted for train number: " + this.trainno)
  }
  cancel(){
    alert(this.name + ": This form is cncelled for train number: " + this.trainno)
    this.trainno = 0
  }
}

let sakshiForm = new RailwayForm("Sakshi", 145216 , "364, pacific ocean, Maharastra - 000664")
sakshiForm.preview()
sakshiForm.submit()
sakshiForm.cancel()
sakshiForm.preview()