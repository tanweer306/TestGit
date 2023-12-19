// const user1 = {
//     firstName:'Tanveer',
//     lastName: 'Ahmad',
//     email: 'tanveer@gmail.com',
//     age:47,
//     address: 'Samanzar coloney, Gojra',
//     about(){
//         return `${this.firstName} is ${this.age} Years old`
//     }

// }

// console.log(user1.about())

// const obj1 = {
//     key1:'value1',
//     key2:'value2'
// }

// obj2 = Object.create(obj1)

// obj2.key3="value3"
// obj2.key4="value4"

// console.log(obj2.key1)
// console.log(obj2.__proto__)

// function fullName(fname,lname){
    
//     function printFullName(){
//         console.log(fname,lname);
//     }
//     return printFullName;
// }

// const ans = fullName('Tanveer','Ahmad')

// ans()

// function printFullName(firstName,lastName) {
//     function printName(){
//         console.log(firstName,lastName)
//     }
//     return printName
// }

// const ans = printFullName('Tanveer','Ahmad')

// console.log(ans());

// const myfunc = power=>number=> power**number;

// const cube = myfunc(3)
// console.log(cube(3))

// function func() {
//         let counter = 0;
//         return function () {
//             if (counter <= 0) {
//                 console.log("Hi You called me");
//                 counter=counter +1;
//             } else {
//                 console.log("You have already called me");
//             }
//         }
    
// }

// const myfunc = func();

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// console.log(myStr);

// setInterval(()=>{
//     const Rd = Math.floor(Math.random() *255);
//     const Gr = Math.floor(Math.random() *255);
//     const Bl = Math.floor(Math.random() *255);
//     const rgb = `rgb(${Rd},${Gr},${Bl})`;
//     console.log(rgb);
//     document.body.style.background = rgb;
// },2000)

function AddTwoNum(num1,num2) {
    return num1+num2;
}

function getTwoNumbersAndAdd(Number1, Number2,callback){
console.log(callback(Number1,Number2));
}

getTwoNumbersAndAdd(4,5,AddTwoNum);
