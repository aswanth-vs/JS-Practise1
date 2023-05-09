//Find first repeating element in an array
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

flag = 0;

const repeating = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
};

console.log("\nProgram to find repeating elements in an array!!!");
rl.question("Enter the elements in the array : ", (numbers) => {
  if (numbers) {
    let arr = [];
    arr = numbers.split(/[ ,]+/);
    console.log(arr);
    if (arr.length < 2) {
      console.log("Please enter more numbers");
      rl.close();
    }
    console.log("First repeating item: ", repeating(arr));
    rl.close();
  } else {
    console.log("Enter items!");
    rl.close();
  }
});
