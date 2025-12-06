const prompt = require("prompt-sync")();

console.log("=================================");
console.log("JavaScript Tutorial Collection");
console.log("=================================\n");

console.log("Available tutorials:");
console.log("1. Basic Console & Functions (tut1.js)");
console.log("2. Variables (tut2(variable).js)");
console.log("3. var, let & const (tut3(var_let and _const).js)");
console.log("4. Primitive Datatypes (tut4(primitive-datatype).js)");
console.log("5. Practice Set (tut5(practice_set).js)");
console.log("6. Operations & Expressions (tut6(Operation_&_Expression).js)");
console.log("7. Conditional Expressions (tut7_Conditional_Expression.js.js)");
console.log("0. Exit\n");

const choice = prompt("Enter tutorial number to run (0-7): ");

const tutorials = {
  "1": "tut1.js",
  "2": "tut2(variable).js",
  "3": "tut3(var_let and _const).js",
  "4": "tut4(primitive-datatype).js",
  "5": "tut5(practice_set).js",
  "6": "tut6(Operation_&_Expression).js",
  "7": "tut7_Conditional_Expression.js.js"
};

if (choice === "0") {
  console.log("Goodbye!");
  process.exit(0);
}

if (tutorials[choice]) {
  console.log(`\n=== Running ${tutorials[choice]} ===\n`);
  require(`./${tutorials[choice]}`);
} else {
  console.log("Invalid choice. Please run again and select 0-7.");
}
