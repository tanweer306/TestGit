const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");
const h8 = document.querySelector(".heading8");
const h9 = document.querySelector(".heading9");
const h10 = document.querySelector(".heading10");

//Following is the callback hell
// setInterval(() => {
//     h1.textContent= "One"
//     h1.style.color="red"; 
//     setInterval(() => {
//         h2.textContent= "Two"
//         h2.style.color="green"; 
//         setInterval(() => {
//             h3.textContent= "Three"
//             h3.style.color="blue"; 
//             setInterval(() => {
//                 h4.textContent= "Four"
//                 h4.style.color="Purple"; 
//                 setInterval(() => {
//                     h5.textContent= "Five"
//                     h5.style.color="#aaa"; 
//                     setInterval(() => {
//                         h6.textContent= "Six"
//                         h6.style.color="Yellow"; 
//                         setInterval(() => {
//                             h7.textContent= "Seven"
//                             h7.style.color="hotpink";
//                             setInterval(() => {
//                                 h8.textContent= "Eight"
//                                 h8.style.color="seagreen";
//                                 setInterval(() => {
//                                     h9.textContent= "Nine"
//                                     h9.style.color="grey";
//                                     setInterval(() => {
//                                         h10.textContent= "Ten"
//                                         h10.style.color="orange"; 
//                                     }, 2000); 
//                                 }, 500);
//                             }, 1000);
//                         }, 1500);
//                     }, 500);
//                 }, 1000);
//             }, 1500);
//         }, 1000);
//     }, 200);
// }, 1000);


function changeText(element,text,color,time, onSuccess, OnFailure){
    setTimeout(() => {
        if (element) {
                if (onSuccess) {
                    element.textContent = text;
                    element.style.color = color;
                    onSuccess()
                }
        } else {
            if (OnFailure) {
                OnFailure()
            }
        }
        
    }, time);
}   
  

changeText(h1,"One","red",1000,()=>{
    changeText(h2,"Two","Green",1000,()=>{
        changeText(h3,"Three","Blue",1000,()=>{
            changeText(h4,"Four","seagreen",1000,()=>{
                changeText(h5,"Five","violet",1000,()=>{
                    changeText(h6,"Six","royalblue",1000,()=>{
                        changeText(h7,"Seven","orange",1000,()=>{
                            changeText(h8,"Eight","grey",1000,()=>{
                                changeText(h9,"Nine","red",1000,()=>{
                                    changeText(h10,"Ten","blue",1000,()=>{
    
                                    },()=>{console.log("h10 dose not exist")})
                                },()=>{console.log("h9 dose not exist")})
                            },()=>{console.log("h8 dose not exist")})
                        },()=>{console.log("h7 dose not exist")})
                    },()=>{console.log("h6 dose not exist")})
                },()=>{console.log("h5 dose not exist")})
            },()=>{console.log("h4 dose not exist")})
        },()=>{console.log("h3 dose not exist")})
    },()=>{console.log("h2 dose not exist")})
},()=>{console.log("h1 dose not exist")})






