//JavaScript Program to Append an Object to An Array
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

flag = 0;

var obj;
console.log("\nEnter Values Seperated by commas or spaces");
rl.question("Please enter the array : ", (string) => {
  if (string) {
    let arr1 = [];
    arr1 = string.split(/[ ,]+/);
    console.log(arr1);
    rl.question("Enter an two values for an Object, only the first two values will be considered: ", (answer) => {
      let arr2 = answer.split(/[ ,]+/);
      obj = {
        key1: arr2[0],
        key2: arr2[1],
      };
      console.log("Result: ", [...arr1, obj]);

      rl.close();
    });
  } else {
    console.log("Enter numbers!");
    rl.close();
  }
});
