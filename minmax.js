//Find the minimum and maximum element in an array
//READS USER INPUT FROM THE COMMAND LINE

// import readline module

const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

flag = 0;

console.log("\nProgram to find the Minimum and Maximum element in an array!!!");
rl.question("Enter the elements in the array : ", (numbers) => {
  if (numbers) {
    let arr = [];
    numbers = numbers.split(/[ ,]+/);

    //checking if entered numbers are of type Number
    numbers.forEach((i) => {
      if (isNaN(i)) {
        flag = 1;
      }
    });
    numbers.forEach((i) => {
      arr.push(Number(i));
    });
    console.log(arr);
    if (arr.length < 2) {
      console.log("Please enter more numbers");
      rl.close();
    } else if (flag != 1) {
      max = arr.reduce((a, b) => {
        return a > b ? a : b;
      });
      min = arr.reduce((a, b) => {
        return a < b ? a : b;
      });
      console.log("Maximum element: ", max);
      console.log("Minimum element: ", min);
      rl.close();
    } else {
      console.log("Please enter valid numbers");
      rl.close();
    }
  } else {
    console.log("Enter numbers!");
    rl.close();
  }
});
