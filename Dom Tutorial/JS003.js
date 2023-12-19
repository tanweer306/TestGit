//Events

const btn = document.querySelector(".btn-headline")
console.log(btn)
// btn.onclick = function() {
//     console.log ("you clicked")
// }
// best methods- add event-listner

// function ClickMe() {
//     console.log ("You clicked me")
// }

// btn.addEventListener("click",function(){
//     console.log("You clicked me")
// })

btn.addEventListener("click",function (){
    console.log("You clicked me")
    console.log(this)
})

// this keywords