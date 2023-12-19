 const all_btn = document.querySelectorAll('.btn');

// for (let btn of all_btn) {
//     btn.addEventListener('click',function(){
//         console.log(this.textContent)
//     })
// }

// for(let i = 0; i < all_btn.length; i++) {
//     all_btn[i].addEventListener('click',function() {
//         console.log(this)
//     })
// }

all_btn.forEach(function(btn){
    btn.addEventListener("click",function(abc) {
        btn.style.backgroundColor="red"
    })
 })

//Event object
// console.log("Scropt start--------------")
 
// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons)

// allButtons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         let num=0;
//         for(i=0; i<1000000000;i++) {
//             num+=i;
            
//         }
//         console.log(e.currentTarget.textContent,num)
        
//     })
// })

// // let outVar = 0;
// // for(i=0; i<1000000000;i++) {
// //     outVar+=i;
// // }
// //console.log("outervar is", outVar)
// console.log("Scropt End--------------")



