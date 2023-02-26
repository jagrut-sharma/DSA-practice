// Find two sums:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//* SOLUTION:

// if 9 - 2 = present return its value(index) and current index(i)

const twoSum = function (nums, target) {
  const arr = nums;
  const targetSum = target;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    // console.log(obj[targetSum - arr[i]]);
    if (obj[targetSum - arr[i]] !== undefined) {
      // checking for diff b/w target and current ele present in obj
      return [obj[targetSum - arr[i]], i];
    }
    obj[arr[i]] = i; // storing element as key and index as value.
    // console.log(obj);
  }
};

// nums = [2,7,11,15], target = 9
console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));

/*
// Find all divisors or sum of all divisors:

function findDivisor(n) {
  const num = n;
  let str = "";
  // for(let counter = 1; counter <= num; counter++) {
  //   if (num % counter === 0) str += `${counter} `;
  // }
  // console.log(str);
  // let count = 0; // FOR GFG(https://practice.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1) --> while(num!=n) --> where num = 1 will be starting point;
  let limit = Math.trunc(Math.sqrt(num));
  for (let counter = 1; counter <= limit; counter++) {
    if (num % counter === 0) {
      if (counter === Math.trunc(num / counter))
        str += `${counter} `; // count++;
      else str += `${counter} ${Math.trunc(num / counter)} `; // count += 2;
    }
  }
  console.log(str); // return string here
}

findDivisor(36);
findDivisor(48);
// findDivisor(15);
// findDivisor(4);

/*
// Armstrong Number:
function armstrongChecker(num) {
  let number = num;
  const numLength = calcLength(number);
  let sum = 0;
  while (number !== 0) {
    sum += (number % 10) ** numLength;
    number = Math.trunc(number / 10);
  }
  return sum === num ? "Yes" : "No";
}

function calcLength(num) {
  let number = num;
  let count = 0;
  while (number !== 0) {
    count++;
    number = Math.trunc(number / 10);
  }
  return count;
}

console.log(armstrongChecker(123));
console.log(armstrongChecker(153));

/*

// Finding GCD/HCF:

const findHCF = function (numOne, numTwo) {
  // find multiples.
  const min = numOne < numTwo ? numOne : numTwo;
  let hcf = 1;
  for (i = 1; i <= min; i++) {
    if (numOne % i === 0 && numTwo % i === 0) hcf = i;
  }
  console.log(hcf);
};

// euclidean HCF

const euclideanHCF = function (numA, numB) {
  if (numB === 0) return numA;
  return euclideanHCF(numB, numA % numB);
};

// findHCF(4, 8);
// findHCF(3, 6);
console.log(euclideanHCF(4, 8));
console.log(euclideanHCF(3, 6));
console.log(euclideanHCF(25, 60));

/*
// Given a 32 bit number X, reverse its binary form and print the answer in decimal.

// Example 1:

// Input:
// X = 1
// Output:
// 2147483648
// Explanation:
// Binary of 1 in 32 bits representation-
// 00000000000000000000000000000001
// Reversing the binary form we get,
// 10000000000000000000000000000000,
// whose decimal value is 2147483648.

function binaryReverse(n) {
  const num = n;
  const binaryNumber32Bit = addPadStart(binaryConverter(num));
  // console.log(binaryNumber32Bit);
  const reverseBinary = reverseStrBinary(binaryNumber32Bit);
  return parseInt(reverseBinary, 2);
}

const binaryConverter = function (num) {
  let binaryDigit = "";
  while (num != 0) {
    binaryDigit += num % 2;
    num = Math.trunc(num / 2);
  }
  return reverseStrBinary(binaryDigit);
};

const addPadStart = function (binaryStr) {
  // console.log(binaryStr)
  let lengthRequired = 32 - binaryStr.length;
  let str = "";
  while (str.length !== lengthRequired) {
    str += "0";
  }
  return str + binaryStr;
};

const reverseStrBinary = function (binaryStr) {
  let binaryNumber = "";
  for (let i = binaryStr.length - 1; i >= 0; i--) {
    binaryNumber += binaryStr[i];
  }
  return binaryNumber;
};

// console.log(binaryReverse(10));
console.log(binaryReverse(1));

/*
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
  if (num < 0)  return false;
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
// console.log(isPalindrome(121)); // true
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
