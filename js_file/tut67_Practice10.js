let images = [
  "code6.jpg",
  "code7.jpg",
  "code5.jpg",
  "code4.jpg",
  "code2.png",
  "code3.jpg",
   "code1.jpg"


  
];

let url = "https://competeapi.vercel.app/contests/upcoming/";
let response = fetch(url);

response.then((v) => {
    return v.json();
}).then((contests) => {

    console.log(contests);
    ihtml = "";

    let i = 0; // ✅ moved outside loop

    for (item in contests) {
        console.log(contests[item]);

        ihtml += `
<div class="col-lg-4 col-md-6 col-sm-12 mb-4">
  <div class="card h-100">
   <img src="${images[i % images.length]}" class="card-img-top" alt="contest image">
    <div class="card-body">
      <h5 class="card-title">${contests[item].title}</h5>

      <p class="card-text">
        Site: ${contests[item].site}
      </p>

      <p>Starts at: ${new Date(contests[item].startTime).toLocaleString()}</p>
      <p>Ends at: ${new Date(contests[item].endTime).toLocaleString()}</p>

      <a href="${contests[item].url}" class="btn btn-primary my-2" target="_blank">
      visit  contest 
      </a>
    </div>
  </div>
</div>
`;
        i++; // ✅ increment
    }

    cardContainer.innerHTML = ihtml;
});



/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
