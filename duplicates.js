//Find duplicate elements in an array
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("\nProgram find duplicates!!!");
rl.question("Enter the elements in the array : ", (numbers) => {
  if (numbers) {
    let arr = [];
    arr = numbers.split(/[ ,]+/);
    console.log(arr);
    if (arr.length < 2) {
      console.log("Please enter more items");
      rl.close();
    } else {
      const duplicate = arr.filter((value, index) => {
        return arr.indexOf(value) !== index;
      });
      console.log("Duplicate items: ", ...duplicate);
      rl.close();
    }
  } else {
    console.log("Enter items!");
    rl.close();
  }
});
