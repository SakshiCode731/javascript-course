let images = [
  "code6.jpg",
  "code7.jpg",
  "code5.jpg",
  "code4.jpg",
  "code2.png",
  "code3.jpg",
   "code1.jpg",
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
<div class="col-lg-4 col-md-6 col-sm-12 mb-4 contest-card"
     data-title="${contests[item].title}">

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

console.log("search working");
function searchContest() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("contest-card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getAttribute("data-title").toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}



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
