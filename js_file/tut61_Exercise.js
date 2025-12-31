let a = [
  "Initializing Hack tool.....",
  "Connecting to Instagram....",
  "Connecting to server 1..........",
  "Connection failed. Retrying...",
  "Connecting to server 2",
  "Connected Successfully.....",
  "Username: prernapatle_28",
  "Trying Brute Force",
  "200k passwords tried....",
  "Match not found.",
  "Another 200k passwords tried....",
  "Match found.....",
  "Hack Successfully....................."
];

const terminal = document.getElementById("terminal");

const sleep = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const showHack = async (message) => {
  await sleep(2);
  terminal.innerHTML += message + "<br>";
  terminal.scrollTop = terminal.scrollHeight;
};

(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i]);
  }
})();
