let user = prompt("Enter snake, water, or gun").toLowerCase();

let cpu1 = Math.floor(Math.random() * 3);
let cpu = ["snake", "water", "gun"][cpu1];

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody. Match is tied";
  } else if (cpu === "snake" && user === "water") {
    return "cpu";
  } else if (cpu === "snake" && user === "gun") {
    return "user";
  } else if (cpu === "gun" && user === "water") {
    return "user";
  } else if (cpu === "gun" && user === "snake") {
    return "cpu";
  } else if (cpu === "water" && user === "snake") {
    return "user";
  } else if (cpu === "water" && user === "gun") {
    return "cpu";
  }
};

let result = match(cpu, user);
document.write(`CPU: ${cpu} <br> User: ${user} <br>  The winner is: ${result.toUpperCase()}`);
