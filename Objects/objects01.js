const obj1= { 1:'a',2:'b'}
const obj2= {3:'c',4:'d'}

const obj3 = {obj1,obj2}

console.log(obj3)

//concatinate objects using spread operator
const obj4 = {...obj1,...obj2}
console.log(obj4, "By spread method")

const obj5 = Object.assign({}, obj1,obj2) // an empty object is optional

console.log(obj5,"by assign method")

// Most commonly we use spread operator to concatinate objects

const tinderuser={};

tinderuser.id=123
tinderuser.name = "Muhammad Musa"
tinderuser.age = 14

const objkeys = Object.keys(tinderuser)
console.log(objkeys,"getting object keys by object.keys methods")
const objvalues = Object.values(tinderuser)
console.log(objvalues, "getting object values by object.values methods");