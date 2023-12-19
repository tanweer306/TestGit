// const h1 = document.querySelector(".heading1");
// const h2 = document.querySelector(".heading2");
// const h3 = document.querySelector(".heading3");
// const h4 = document.querySelector(".heading4");
// const h5 = document.querySelector(".heading5");
// const h6 = document.querySelector(".heading6");
// const h7 = document.querySelector(".heading7");
// const h8 = document.querySelector(".heading8");
// const h9 = document.querySelector(".heading9");
// const h10 = document.querySelector(".heading10");

// function changeText(element,text,color,time,onSuccess,onFailure) {
//     setTimeout(() => {
//         if (element) {
//             if (onSuccess) {
//                 element.textContent = text;
//                 element.style.color = color;
//                 console.log(text)
//                 onSuccess()
//             }
//         } else {
//             if (onFailure) {
//                 onFailure()
//             }
//         }
//     }, time);
// }

// changeText(h1,"One","red",1000,()=>{
//     changeText(h2,"Two","blue",1000,()=>{
//         changeText(h3,"Three","green",1000,()=>{
//             changeText(h4,"Four","red",1000,()=>{
//                 changeText(h5,"Five","blue",1000,()=>{
//                     changeText(h6,"Six","red",1000,()=>{
//                         changeText(h7,"Seven","green",1000,()=>{
//                             changeText(h8,"Eight","red",1000,()=>{
//                                 changeText(h9,"Nine","blue",1000,()=>{
//                                     changeText(h10,"Ten","green",1000,()=>{
    
//                                     },()=>{console.log("h10 dose not exist")})
                                    
//                                 },()=>{console.log("h9 dose not exist")})
//                             },()=>{console.log("h8 dose not exist")})
//                         },()=>{console.log("h7 dose not exist")})
//                     },()=>{console.log("h6 dose not exist")})
//                 },()=>{console.log("h5 dose not exist")})
//             },()=>{console.log("h4 dose not exist")})
//         },()=>{console.log("h3 dose not exist")})
//     },()=>{console.log("h2 dose not exist")})
// },()=>{console.log("h1 dose not exist")})


// const bucket = [1,2,3,4,5,6,7]

// const myPromise = new Promise((resolve,reject)=>{
//     if (bucket.includes(3) && bucket.includes(7)){
//         resolve("Promise is resolved")
//     }  else {
//         reject("Promise is rejected")
//     }
// })

// myPromise.then(
//     (msg)=>{
//         console.log(msg);
//     }
// ,
//     (err)=>{
//         console.log(err)
//     }).finally(()=>{
//         console.log("Finaly")
//     })

    // myPromise.then(
    //     (msg)=>{
    //         console.log(msg);
    //     }
    // ).catch((error)=>{
    //     console.log(error)
    // }).finally(()=>{
    //     console.log("Finaly done")
    // })

// function mypromise() {
//     return new Promise((resolve,reject)=>{
//         let b = true;
//         setTimeout(() => {
//             if (b){
//                 resolve()
//             } else{
//                 reject()
//             }
//         }, 1000);
//     })
// }

// mypromise()
// .then(()=>{console.log("Resolved")})
// .catch(()=>{console.log("Rejected")})

// function mypromise(){
//     return new Promise((resolve,reject)=>{ return resolve("foo")})
// }

// mypromise()
// .then(value=>{
//     console.log(value)
//     return value+= "bar"
// }).then(value=>{
//     console.log(value)
//     return value+= "Bazz"
// }).then(value=>{
//     console.log(value)
// })