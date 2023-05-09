//JS Program to Sort the Words in Alphabetical order
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\nProgram to Sort the Words in Alphabetical order!!!");
rl.question("Enter the Words:   ", (string) => {
  if (string) {
    //sorting
    console.log("Words in Alphabetical order: ");
    //spread operator will remove the [ ]
    console.log(...string.split(/[ ,]+/).sort());
  } else {
    console.log("Please enter a valid String");
  }

  // close input stream
  rl.close();
});
