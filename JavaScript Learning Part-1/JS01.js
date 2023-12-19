"use strict";
// ypu can use single double quotes or backticks (`) for srting values
console.log('hello world3');

//variable names are case sensitive.

let firstName="Muhammad";
console.log(firstName);

firstName="Mehmood";
console.log(firstName);

//Declaring constants

const pi=3.14;
console.log (pi);

// String indexing
let str="Pakistan";
console.log(str[3]);

//String length
console.log(str.length)

console.log(str[str.length-1])

//Trim function

let sTrim = "       Tanveer     "
console.log(sTrim.length);
let newStr = sTrim.trim();
console.log(newStr.length);

//To upper case
console.log(sTrim.toUpperCase())

//To upper case
console.log(sTrim.toLowerCase())

// Slice (StratIndex, EndIndex)

let strSlice = "Today is friday"

console.log( strSlice.slice(4,12));

