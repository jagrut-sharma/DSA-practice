const topK = function (arr, k) {
  const frequencyObj = new Map();
  for (const num of arr) {
    frequencyObj.set(num, (frequencyObj.get(num) || 0) + 1);
  }
  // console.log(frequencyObj);

  const keyValue = Array.from(frequencyObj);
  // console.log(keyValue);

  keyValue.sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    return b[1] - a[1];
  });
  // console.log(keyValue);

  const maxRepeat = [];
  for (let j = 0; j < k; j++) {
    maxRepeat[j] = keyValue[j][0];
  }

  console.log(maxRepeat);
};

topK([1, 1, 1, 2, 2, 3], 2);
topK([1, 1, 2, 2, 3, 3, 3, 4], 2);

/*
function frequencyCount(arr, N, P) {
  const testArr = new Array(P).fill(0);
  console.log(testArr);
  for (let i = 0; i < N; i++) {
    testArr[arr[i] - 1] += 1;
  }
  return testArr;
}

console.log(...frequencyCount([2, 3, 2, 3, 5], 5, 5));
/*
const checkFrequency = function(arr) {
  const testObj = new Map();
  for (const ele of arr) {
    if (!testObj.has(ele)) testObj.set(ele, 1)
    else testObj.set(ele, testObj.get(ele) + 1)
  }
  return testObj;
  // for (const ele of testObj) console.log(ele);
}

const checkFrequency2 = function(arr) {
  const testObj = {};
  arr.forEach(ele => !testObj[ele] ? testObj[ele] = 1 : testObj[ele] += 1);
  return Object.values(testObj);
}

const arr = [10, 5, 10, 15, 10, 5];


console.log(checkFrequency(arr));
console.log(...checkFrequency2(arr));

/*
// FIBONACCI SERIES: Current number is sum of last 2 digits: 0 1 1 2 3 5 8 13 .... => Recursion
const readlineSync = require("readline-sync");
const n = Number(readlineSync.question("Enter a number: \n"));

const findFibonacci = function (n) {
  // For handling 0 and 1
  if (n <= 1) return n;
  const last = findFibonacci(n - 1);
  const secondLast = findFibonacci(n - 2);
  return last + secondLast;
};

const forFibonacci = function (n) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= n; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

// console.log(findFibonacci(n));
console.log(forFibonacci(n));

/*
// Problem Statement: “Given a string, check if the string is palindrome or not.”  A string is said to be palindrome if the reverse of the string is the same as the string

// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome

// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome

const isPalindrome = function (str, i) {
  if (i >= str.length / 2) return;
  if (str[i] !== str[str.length - 1 - i]) return "Not A Palindrome";
  isPalindrome(str, i + 1);
  return "Is Palindrome";
};

console.log(isPalindrome("ABCBA", 0));
console.log(isPalindrome("TAKE U FORWARD", 0));

/*
// Problem Statement: You are given an array. The task is to reverse the array and print it using recursion.

// const reversedArr = [];
const reverseArr = function (arr, i) {
  // for (let i = 0; i < length; i++) {
  //   reversedArr[i] = arr[length - i - 1];
  // }
  if (i >= arr.length / 2) return;
  let temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;
  reverseArr(arr, i + 1);
  return arr;
};

const arr = [1, 2, 3, 4, 5];
const arr1 = [20, 245, 453, 124, 65, 10];

console.log(reverseArr(arr, 0));
console.log(reverseArr(arr1, 0));

/*
// Problem Statement: Given a number X, print its factorial.

// To obtain the factorial of a number, it has to be multiplied by all the whole numbers preceding it.More precisely X! = X * (X - 1) * (X - 2) … 1.

// Note: X  is always a positive number.

//   Examples:

// Example 1:
// Input: X = 5
// Output: 120
// Explanation: 5! = 5 * 4 * 3 * 2 * 1
const readlineSync = require("readline-sync");
const n = Number(readlineSync.question("Enter number to find factorial: \n"));

let ansFactorial = 1;
const factorial = function (n) {
  if (n <= 1 || n === 0) return 1;
  ansFactorial = n * factorial(n - 1);
  return ansFactorial;
};

console.log(factorial(n));

/*
// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

// Examples:

// Example 1:
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15
const readlineSync = require("readline-sync");
const n = Number(readlineSync.question("Enter number: \n"));

let sum = 0;
const sumOfNumbers = function (n) {
  if (n === 1) return 1;
  sum += n + sumOfNumbers(n - 1);
  return sum;
};

console.log(sumOfNumbers(n));

/*
// PRINT 1 to N using backtrack:
const readlineSync = require("readline-sync");
const n = readlineSync.question(
  "Enter number upto which you want to print: \n"
);

let str = "";
const printUptoN = function (n) {
  if (n <= 1) return 1;
  // Function is called first and then the original n is added to str
  str += `${printUptoN(n - 1)} ${n}`;
  return str;
};

console.log(printUptoN(n));

/*
const readlineSync = require("readline-sync");
const name = readlineSync.question("Enter name: \n");
const n = readlineSync.question("Enter no. of times, you need to print \n");

let str = "";
const printNameNTimes = function (name, n) {
  if (n === 1) return name;
  str += `${name} ${printNameNTimes(name, n - 1)}`;
  return str;
};

console.log(printNameNTimes(name, n));

/* 
// PRINT N to 1 - Recursion

const readlineSync = require('readline-sync');
const n = readlineSync.question('Enter value upto which you need to print \n');

let str = '';
const printToN = function(n) {
  // const count = i;
  const num = n;
  if (num === 1) return 1;
  str += `${num} ${printToN(num - 1)}`;
  return str;
}

console.log(printToN(n));
*/

/*
// Basic Recursion:

// Print numbers from 1 to N without the help of loops.

// Example:
// Input:
// N = 10
// Output: 1 2 3 4 5 6 7 8 9 10

// const readlineSync = require('readline-sync');
// const n = readlineSync.question('Enter value upto which you need to print \n');
let str = "";
const printToN = function (i, n) {
  const count = i;
  const num = n;
  if (num === count) return num;
  str += `${count} ${printToN(count + 1, num)}`;
  return str;
};

console.log(printToN(1, 5));

// add a number to str => call a function for this.
// Stop at 1.

/*
// Prime number:

// Method -2:
const isPrime = function (n) {
  let num = n;
  let sqrt = Math.trunc(Math.sqrt(num));
  if (num === 1) return "Non Prime";

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return "Non prime";
  }
  return "prime";
};

console.log(isPrime(9));
console.log(isPrime(127));
console.log(isPrime(3));
console.log(isPrime(7));

/*

// Method-1:

const isPrime = function (n) {
  let num = n;

  if (num === 1) return "Non prime";

  if (num < 10) {
    if (num === 2 || num === 3 || num === 5 || num === 7) return "prime";
    return "Non Prime";
  } else {
    // To handle multiples
    if (
      num % 2 === 0 ||
      num % 3 === 0 ||
      num % 5 === 0 ||
      num % 7 === 0 ||
      num % 9 === 0
    )
      return "Non prime";

    // To handle square
    if (Math.sqrt(num) % 1 === 0) return "Non-prime";

    return "Prime Number";
  }
};

console.log(isPrime(9));
console.log(isPrime(127));
console.log(isPrime(3));
console.log(isPrime(7));

/*
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
