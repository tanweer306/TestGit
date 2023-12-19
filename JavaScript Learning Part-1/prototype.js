function hello() {
    console.log('hello world');
}
hello()

//JS functions ==> functions + objects
// functions have properties & methods like other objects
console.log(hello.name)

//you can add more properties to a function

hello.myproperty = 'This is another property';
console.log(hello.myproperty)

//functions provide more usefull properties

// functions provide us some free space also
// which is called PROTOTYPE
//. {}

console.log(hello.prototype)

//only functions provide prototype property

hello.prototype.abc = 'abc';
console.log(hello.prototype)
// we can add functions also in prototype
hello.prototype.sing = function(){
    return "la la la la"
}

console.log(hello.prototype.sing())

