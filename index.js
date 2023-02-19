// Question-1
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
for (let num of numEntered) {
  if (num) length++;
}
console.log(length);
