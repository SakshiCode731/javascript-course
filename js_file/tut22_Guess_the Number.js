// Import prompt-sync to take user input
const prompt = require("prompt-sync")();

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

console.log("=== Guess the Number Game ===");
console.log("I have selected a number between 1 and 100.");

// Loop until the user guesses the correct number
do {
    guess = parseInt(prompt("Enter your guess: "));
    attempts++;

    if (guess > randomNumber) {
        console.log("Too high! Try a smaller number.");
    } else if (guess < randomNumber) {
        console.log("Too low! Try a bigger number.");
    } else {
        console.log("🎉 Congratulations! You guessed the correct number.");
        console.log("Total attempts:", attempts);
    }
} while (guess !== randomNumber);
