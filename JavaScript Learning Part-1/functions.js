// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(54));

// function firstChar(str) {
//   return str[0];
// }

// console.log(firstChar("Tanveer"));

// function abc(arr, target) {
//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] === target) {
//       return i;
//     }
//   }
//     return -1;

// }

// const marray = [4, 6, 8, 9];

// console.log(abc(marray, 9));

//Function Expression

const MyFunction = function () {
  console.log("This is function expression");
};
MyFunction();

//Arrow Function

const ArrowFunc = () => {
  console.log("This is arrow function");
};
ArrowFunc();

//single line arrow function
const ArrowFunc2 = (number) => number % 2 === 0;
// first number is parameter
const firstChar = (pstr) => pstr[0];
console.log(ArrowFunc2(8));
console.log(firstChar("Tanveer"));

//function inside function

const app = (n1, n2) => {
  const addNum = (num1, num2) => {
    return num1 + num2;
  };
  const Mul = (num1, num2) => num1 * num2;

  console.log("Addition=" + addNum(n1, n2));
  console.log("Multi=" + Mul(n1, n2));
};

//default parameters
app(6, 8);
const myfunc = function(a=0,b=0) {
  return a+b;
}
console.log(myfunc(6))

//rest parameters

function restPara(a,b,...c) {
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}

restPara(4,5,6,7,8,9)

//Object Parameter destructuring

const obj= {
  fname: "Tanveer",
  lname: "Ahmad",
  age: 46
}

function defunc({fname,lname,age}) {
  console.log(fname)
  console.log(lname)
  console.log(age)
}
defunc(obj)


//Callback functions

function cbfunc1(fname) {
  console.log("My name is" + fname)
}
function cbfunc2(callback) {
  console.log("This is function2");
  callback("Tanveer")
}

cbfunc2(cbfunc1);

//Function returning function

function retfunc() {
     function hello() {
      return "Hello this is function inside a function"
     }
     return hello;
}
const ans = retfunc();
console.log(ans());
