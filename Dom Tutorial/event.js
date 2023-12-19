//Event bubbling-event propagation
//Event capturing
//Event deligation

// const granparent = document.querySelector(".grandparent")
// const parent = document.querySelector(".parent")
// const child = document.querySelector(".child")

// child.addEventListener("click",()=>{
//     console.log("you clicked child")
// })
// parent.addEventListener("click",()=>{
//     console.log("you clicked parent")
// })
// granparent.addEventListener("click",()=>{
//     console.log("you clicked Grand-parent")
// })
// document.body.addEventListener("click",()=>{
//     console.log("you clicked body")
// })

//this is called event bubbling or event propagation, if you click on child , all parent 
// events are also invoking.

// capturing events

// child.addEventListener("click",()=>{
//     console.log("Capturing child clicked")
// },true)
// parent.addEventListener("click",()=>{
//     console.log("Capturing parent clicked")
// },true)
// granparent.addEventListener("click",()=>{
//     console.log("Capturing Grand-parent clicked")
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("Capturing body clicked ")
// },true)

// //==========================================

// child.addEventListener("click",()=>{
//     console.log("Bubbling child clicked")
// })
// parent.addEventListener("click",()=>{
//     console.log("Bubbling parent clicked")
// })
// granparent.addEventListener("click",()=>{
//     console.log("Bubbling Grand-parent clicked")
// })
// document.body.addEventListener("click",()=>{
//     console.log("Bubbling body clicked")
// })


// event deligation

const gp = document.querySelector(".grandparent")
gp.addEventListener("click",(e)=>{
    console.log(e.target.textContent)
})
