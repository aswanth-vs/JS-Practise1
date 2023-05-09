//Move all the negative elements to one side of the array
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

flag = 0;

console.log("\nProgram to move negative elements to one side of an array!!!");
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
      arr = arr.sort();
      console.log("Moved array : ", arr);
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
