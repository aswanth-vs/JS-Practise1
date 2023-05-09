// JS program to count the number of vowels in a string
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

var vowels = "aeiouAEIOU";

const countVowels = (str) => {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let str = "";

// question user to enter name
console.log("Count the number of Vowels in a String!!!");
rl.question("Enter the String: ", (string) => {
  if (string) {
    str = string;
    console.log("Number of Vowels: ", countVowels(str));
  } else {
    console.log("Please enter a valid String");
  }

  // close input stream
  rl.close();
});
