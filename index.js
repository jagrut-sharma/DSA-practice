// QUESTION-3:
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

const isPalindrome = function (x) {
  let num = x;
  if (num < 0 || (num % 10 === 0 && num !== 0)) return false;
  let reversedNum = 0;
  while (reversedNum < num) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
    // console.log("reversedNum", reversedNum);
    // console.log("num =", num);
  }

  // console.log("Final:", reversedNum);
  return num === reversedNum || num === Math.floor(reversedNum / 10);
};

/*
const isPalindrome = function (x) {
  if (x < 0) return false;
  return x === getReverseNumber(x);
};

const getReverseNumber = function (num) {
  let reversedNum = 0;
  while (num !== 0) {
    const digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.trunc(num / 10);
  }
  return reversedNum;
};
*/
console.log(isPalindrome(121)); // true
// console.log(isPalindrome(100)); // false
// console.log(isPalindrome(1221)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(101)); // true

/*
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

console.log(reverseNumber(numInput)); //234
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
