//JavaScript Program to Make a Simple Calculator
//READS USER INPUT FROM THE COMMAND LINE

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(...args) {
  let sum = 0;
  sum = args.reduce((a, b) => {
    return a + b;
  });
  console.log("Sum is: ", sum);
}

function subtract(...args) {
  let diff = 0;
  diff = args.reduce((a, b) => {
    return a - b;
  });
  console.log("Difference is: ", diff);
}

function multiply(...args) {
  let prod = 1;
  prod = args.reduce((a, b) => {
    return a * b;
  });
  console.log("Product is: ", prod);
}

function divide(...args) {
  let div = 1;
  div = args.reduce((a, b) => {
    return a / b;
  });
  console.log("Division is: ", div);
}

flag = 0;

console.log("\nEnter Values Seperated by commas or spaces");

rl.question("Please enter the numbers : ", (numbers) => {
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
      rl.question("Select an Operation : 1. Add, 2. Subtract, 3. Multiply, 4. Divide\n", (answer) => {
        let op = answer.split(/[ ,]+/)[0];

        switch (op) {
          case "1":
            console.log("Addition");
            add(...arr);
            break;

          case "2":
            console.log("Substraction");
            subtract(...arr);
            break;

          case "3":
            console.log("Multiplication");
            multiply(...arr);
            break;

          case "4":
            console.log("Division");
            divide(...arr);
            break;

          default:
            console.log("Please select a given value");

            break;
        }
        rl.close();
      });
    } else {
      console.log("Please enter valid numbers");
      rl.close();
    }
  } else {
    console.log("Enter numbers!");
    rl.close();
  }
});
