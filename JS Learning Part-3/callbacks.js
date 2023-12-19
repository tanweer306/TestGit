// function myfunc(callback) {
//     console.log("myfunc is doing something-1");
//     callback();
// }
// function myfunc2() {
//     console.log("myfunc is doing something-2");
// }

// myfunc(myfunc2);

// function Get2NumberAndAdd(number1,number2,callback){
// console.log(number1,number2)
// callback(number1,number2);
// }

// function AddNumber(num1,num2) {
//     console.log(num1+num2)
// }

// Get2NumberAndAdd(4,5,AddNumber)

// const head1 = document.querySelector(".heading1");
// const head2 = document.querySelector(".heading2");
// const head3 = document.querySelector(".heading3");
// const head4 = document.querySelector(".heading4");
// const head5 = document.querySelector(".heading5");
// const head6 = document.querySelector(".heading6");
// const head7 = document.querySelector(".heading7");


// setTimeout(()=>{
//     head1.textContent = "Heading1";
//     head1.style.color = "red";
// },1000)
const MyPromise = new Promise((resolve,reject)=>{
    let b =false;
    if(b) {
        console.log("resolved")
        resolve("This is resolved")
    } else {
        console.log("unable to resolve")
        reject("Rejected");
    }
})

MyPromise.then((retval)=>{
    console.log(retval)
}

).catch((err)=>{
    console.log(err)
})

