




const IntervalId = setInterval(() => {
    const red = Math.floor(Math.random() *200);
    const green = Math.floor(Math.random() *200);
    const blue = Math.floor(Math.random() *200);
    const rgbvalue = `rgb(${red},${green},${blue})`
    document.body.style.backgroundColor = rgbvalue;
}, 1000);

const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click",()=>{
clearInterval(IntervalId)
btn.textContent = document.body.style.backgroundColor

})