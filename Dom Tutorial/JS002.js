const navItems = document.getElementsByTagName('a');

// mainHeading.textContent = "This is something else";
//console.log(mainHeading.textContent);

//const mainHeading = document.querySelector("div.headline h2");

//mainHeading.style.color='blue';
//console.log(navItems)


// for (let i=0;i<navItems.length;i++) {
//     console.log(navItems([i]))
// }

// for (let navitem of navItems){
// console.log(navitem)
// }

for (let i = 0; i < navItems.length;i++) {
    let itm =navItems[i];
    itm.style.backgroundColor = 'green'
    itm.style.fontWeight = 'Bold'
} 

console.log(document);