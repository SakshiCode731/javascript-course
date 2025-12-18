// let btn = document.getElementById("btn");

let x = function (event) {
    console.log(event.target)
    console.log(event.type,event.clientX,event.clientY)
    
    // alert("Hello world1!")
    
}

let y = function (e) {
    console.log(e)
    alert("Hello world2!")
    
}

btn.addEventListener('click', x)
// btn.addEventListener('click', y)

// let a = prompt("What is your favorite number?");

// if (a === "2") {
//     btn.removeEventListener('click', x)
// }
