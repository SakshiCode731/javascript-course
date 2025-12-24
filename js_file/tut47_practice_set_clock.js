// // setInterval(()=>{
// //   let d = new Date()
// //   time.innerHTML = d
// // },1000)

// // setInterval(()=>{
// //   const date = new Date();
// // console.log(date.toLocaleDateString());
// // time.innerHTML = date
// // },1000)

// // Source - https://stackoverflow.com/a
// // Posted by gilly3, modified by community. See post 'Timeline' for change history
// // Retrieved 2025-12-24, License - CC BY-SA 4.0

// // Source - https://stackoverflow.com/a
// // Posted by video-reviews.net
// // Retrieved 2025-12-24, License - CC BY-SA 4.0

// function getDateTime() {
//         var now     = new Date(); 
//         var year    = now.getFullYear();
//         var month   = now.getMonth()+1; 
//         var day     = now.getDate();
//         var hour    = now.getHours();
//         var minute  = now.getMinutes();
//         var second  = now.getSeconds(); 
//         if(month.toString().length == 1) {
//              month = '0'+month;
//         }
//         if(day.toString().length == 1) {
//              day = '0'+day;
//         }   
//         if(hour.toString().length == 1) {
//              hour = '0'+hour;
//         }
//         if(minute.toString().length == 1) {
//              minute = '0'+minute;
//         }
//         if(second.toString().length == 1) {
//              second = '0'+second;
//         }   
//         var dateTime = day+'/'+month+'/'+year+' '+hour+':'+minute+':'+second;   
//          return dateTime;
//     }

//     // example usage: realtime clock
//     setInterval(function(){
//         currentTime = getDateTime();
//         document.getElementById("time").innerHTML = currentTime;
//     }, 1000);

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  document.getElementById("clock").innerText =
    `${hours}:${minutes}:${seconds}`;
  document.getElementById("ampm").innerText = ampm;

  document.getElementById("date").innerText =
    now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();
