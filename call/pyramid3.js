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

// h1.style.color="red"

function changeText(element,text,color,time) {
    setTimeout(() => {
        if (element) {
                element.textContent = text;
                element.style.color = color;
        } else {
           console.log(new Error("Element dose not exist"))
        }
    }, time);
}

function myPromise() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return resolve()
        }, timeout);
        
    })
}

myPromise().then(()=>{
    console.log("resolved")
})