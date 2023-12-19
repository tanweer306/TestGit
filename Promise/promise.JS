console.log("hello- script start here--------------");

// const myPromise = new Promise((resolve,reject)=>{

//       const bucket = ["rice","chicken","salt","oil","vagetables"]
//       if (bucket.includes("rice")  && bucket.includes("salt") && bucket.includes("chicken")) {
//         resolve("You will get fried rice after 15 minuts")
//       } else {
//         reject("Sorry! I can't cook fried rice right now!")
//       }
// })

// myPromise()
//     .then((msg)=>{ console.log(msg)})
//     .catch((msg)=>{console.log(msg)})

// setTimeout(() => {
//     console.log("timeout called")
// }, 1000);

// for (let i=0; i<100; i++) {
//     console.log("hello",i)
// }
// console.log("hello- script end here--------------");



function myPromise(){ return  new Promise((resolve,reject)=>{ 

    const bucket = ["rice","chicken","salt","oil","vagetables"]

setTimeout(()=>{
    if (bucket.includes("rice")  && bucket.includes("salt") && bucket.includes("chicken")) {
        resolve("You will get fried rice after 15 minuts")
      } else {
        reject("Sorry! I can't cook fried rice right now!") }
},3000)

})}

myPromise()
    .then((msg)=>{ console.log(msg)})
    .catch((msg)=>{console.log(msg)})

setTimeout(() => {
    console.log("timeout called")
}, 1000);

for (let i=0; i<100; i++) {
    console.log("hello",i)
}
console.log("hello- script end here--------------");