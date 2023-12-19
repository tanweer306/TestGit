//Falsy values which always return false value in Compressin

// false
// ""
// null
// undefined
// 0

let fname;

//Falsy values

let msg = (fname)? console.log(fname) : console.log("fname is false");
fname=0;
msg = (fname)? console.log(fname) : console.log("fname is false");
fname="";
msg = (fname)? console.log(fname) : console.log("fname is false");
fname=null;
msg = (fname)? console.log(fname) : console.log("fname is false");
fname=undefined
msg = (fname)? console.log(fname) : console.log("fname is false");

//Truthy value
fname="Tanveer"
msg = (fname)? console.log(fname) : console.log("fname is false");
fname="0"
msg = (fname)? console.log(fname) : console.log("fname is false");
fname=1
msg = (fname)? console.log(fname) : console.log("fname is false");
fname=-1
msg = (fname)? console.log(fname) : console.log("fname is false");

//ternery operator

let age = 15;
let drink = age<=5? "Milk" : "cofee";
console.log(drink);