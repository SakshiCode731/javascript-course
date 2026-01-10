//The HTML AudioElement Interface can be used to play audio in the browser.
// Create an alarm clock which display time and plays sound at a user specified time

// function play() {
//   var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
//   audio.play();
// }
// setTimeout(() =>{
//   play()
// },200)
// play()

let audio = new Audio(
  'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
);

// wait for USER interaction once
document.addEventListener("click", () => {
  
  function play() {
    audio.play().catch(err => console.log("Audio blocked"));
  }

  // now these WILL work
  play();

  setTimeout(() => {
    play();
  }, 2000);

}, { once: true });



