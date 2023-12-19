let fruits = ['aa','bb','cc','dd','ee','ff','gg'];

let fruits2=[];
for (let i=0;i<fruits.length; i++) {
    fruits2.push((fruits[i].toUpperCase()));
}
console.log(fruits2);

//using const to create array 
const arr1 = ["Apple","mango", "grapes","date","melon"];
arr1.push("banana");
console.log(arr1);

//we can push/pop values and use array methods on constant arr but can't assign new array to the constant array

// arr1= ["mango", "Gauva"]; this is invalid

let i = 0
let arr2=[];
while (i<arr1.length) {
   arr2.push(arr1[i]);
   i++
}
console.log(arr2)

// for of loop
for ( let fruit of arr1) {
    console.log (fruit);
}

// for in loop, itereates the index of array

for ( let index in arr1) {
    console.log (arr1[index]);
}

//Array destructuring

const my_array = ["aa","bb","cc","dd","ee"];
let[a1,a2,a3] = my_array;
console.log(a1,a2,a3);

// save rest of the values in another array
let[b1,b2,...ar22] = my_array;
console.log(ar22);

//default parametere






