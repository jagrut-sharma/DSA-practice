// QUESTION--2

// Reverse a number in C.

// Problem Statement: Given a number N reverse the number and print it.

// Examples:

// Example 1:
// Input: N = 123
// Output: 321
// Explanation: The reverse of 123 is 321

const readlineSync = require("readline-sync");
const numInput = Number(readlineSync.question("Enter a number \n"));
// console.log(numInput);

function reverseNumber(num) {
  let reversedNum = 0;
  while (num !== 0) {
    const length = Number(String(num).length); //  we can also use function of preious problem.
    const digit = num % 10;
    reversedNum += digit * 10 ** (length - 1);
    // console.log("Reversed no:", reversedNum);
    num = Math.floor(num / 10);
  }
  return reversedNum;
}

console.log(reverseNumber(numInput));
/*

// QUESTION--1
// Problem Statement: Given an integer N , write program to count number of digits in N.

// Examples:

// Example 1:
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

const readlineSync = require("readline-sync");
const numEntered = readlineSync.question(`Hi, Enter a number: \n`);
// console.log(numEntered);
let length = 0;

// sol-1:
// for (let num of numEntered) {
//   if (num) length++;
// }

// sol-2:
// console.log(`${numEntered} has ${numEntered.length} digits`);

// sol-3:

// for (let letter = 0; letter < numEntered.length; letter++) {
//   if (numEntered[letter]) length++;
// }
// console.log(`${numEntered} has ${length} digits`);

// sol-4:
let number = Number(numEntered);
if (number) {
  while (number !== 0) {
    length++;
    number = Math.floor(number / 10);
  }
  console.log(`${numEntered} has ${length} digits`);
} else console.log("Enter a valid number");

// console.log(`${numEntered} has ${length} digits`);
*/
