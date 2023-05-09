//Check whether the numbers have same last digit
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

flag = 0;

console.log("\nProgram to check whether the numbers have same last digit!!!");
rl.question("Enter more than ONE Number: ", (num) => {
  //removes white spaces and commas
  arr = num.split(/[ ,]+/);
  //checking if entered numbers are of type Number
  arr.forEach((i) => {
    if (isNaN(i)) {
      flag = 1;
    }
  });

  if (flag != 1 && arr.length > 1) {
    let ldFlag = 0;
    lastDigit = arr[0].charAt(arr[0].length - 1);
    for (let i = 1; i < arr.length; i++) {
      if (lastDigit != arr[i].charAt(arr[i].length - 1)) {
        console.log("Numbers dont have the same last digit");
        ldFlag = 1;
        break;
      }
    }
    if (ldFlag == 0) {
      console.log("Numbers have the same last digit: ", lastDigit);
    }
  } else {
    console.log("Please enter valid numbers");
  }

  // close input stream
  rl.close();
});
