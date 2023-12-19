// const emp_methods={
//     about: function() {
//         return `${this.fname} is ${this.age} years old`
//     },
//     is18: function(){
//         return this.age >=18;
//     }
// }

// while we have a free prototype object associated 
// with any functions why not we add the methods in 
// the prototype object instead of writing seperate 
// functions




function creat_user(fname,lname,email,age,address) {
    const user = Object.create(creat_user.prototype);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.address = address;
    return user;
}

creat_user.prototype.about = function() {
    return `${this.fname} is ${this.age} years old`
}
creat_user.prototype.is18 = function(){
    return this.age >=18;
}
const user1 = creat_user('Waris','ALI','asad@gmail.com',30,'Altaf coloney,Gojra');

console.log(user1)
console.log(user1.about())
console.log(user1.is18())


// New Keyword

function create_user2(fname,age) {
    this.fname = fname;
    this.age = age;
}

create_user2.prototype.about = function() {
            console.log( this.fname, this.age)
}

const user2= new create_user2('Tanveer',44)
console.log(user2)
console.log(user2.about())

//New keywords is doing 3 tasks here
// 1- Creating an empty object 'this{}
// 2- it will create refrence to the prototype also
// we will not have to write Object.create(creat_user.prototype)
// 3  return 'this{}' object to the calling function


// Now our constructor function will look like following

function creat_emp(fname,lname,email,age,address) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.email = email
    this.address = address;
}

creat_emp.prototype.about = function() {
    return `${this.fname} is ${this.age} years old`
}
creat_emp.prototype.is18 = function(){
    return this.age >=18;
}
const emp1 = new creat_emp('Waris_emp','ALI','asad@gmail.com',30,'Altaf coloney,Gojra');

console.log(emp1)
console.log(emp1.about())
console.log(emp1.is18())