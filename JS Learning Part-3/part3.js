//synchronous programming vs asynchonous programmin

//Suchoronous programming

// console.log("Script Start")

// for (let i =0;i<10000;i++) {
//     console.log ('inside for loop')
// }
// console.log("Script end")


//setTimeout

console.log("Script Start")



const Id = setTimeout(() => {
    console.log('Inside set timeout')
}, 1000);

for (let i=0;i<100;i++) {
    console.log("..........");
}
console.log("settimeout Id = ",Id)
console.log("clearing Timeout")
clearTimeout(Id);
console.log("script end")