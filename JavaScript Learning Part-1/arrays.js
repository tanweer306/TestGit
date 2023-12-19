//Arrays are odered collection of items
//Refrence Type ( All refrence types are called objects)
//decleration
let fruits = ["apple","banana","Mango","grapes"];
// console.log(fruits);
// console.log(fruits[0]); // prints a single value

// array of numbers
let numbers = [1,2,3,4,5];
// console.log(numbers);

//any datatype can be stored in array
let mixed = [1,2,3.2,"string",null,undefined,false]
console.log(mixed)

//change a balues
fruits[2] = "leechi"
// console.log (fruits);

// console.log( typeof fruits)

//is this object an array
// console.log(Array.isArray(fruits));

//Arrays Methods

//push add value at the end
fruits.push("Gava");
// console.log(fruits);

//pop remove value at the end, pop returns the value also
let x= fruits.pop();
// console.log(fruits);
// console.log (x);

//unshift add value at the start
fruits.unshift("Orange")
// console.log (fruits);
//shift remove value from start
fruits.shift();
// console.log (fruits);
let removed= fruits.shift()
// console.log (removed);

//Example of Refrence types

let A1 = ['A1','A2','A3'];
let A2 = A1;

// console.log(A2);
A1[0]='BB';
// console.log(A2);
//We changed a value in A1, similar change is reflecting in A2 also

//How to clone an array

let arr1 = ['item1','item2','item3'];

//-1
let arr2 = arr1.slice(0);
// console.log(arr2);
//-2
let arr3 = [].concat(arr1);
// console.log(arr3);

//-3
let arr4 = [...arr1]

arr1.pop();
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

// console.log('-------------------------------');

let arr5 = arr4.slice(0).concat(['item5','item6'])
// console.log(arr5);

















