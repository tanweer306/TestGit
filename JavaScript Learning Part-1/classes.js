
//Following is a constructor function, now we will do the same thing with class objects. we can say that classes are fake in the JS, at the backend class will use the same constructor functionality.

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

// how to create a class in JS

class CreateUser {
    constructor(fname,lname,email,age,address) {
        console.log("Constructor called");
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email
        this.address = address;
    }
    about() { return `${this.fname} is ${this.age} years old` }
    is18() { return this.age >=18; }
}
const user1 = new CreateUser('Waris_emp','ALI','asad@gmail.com',30,'Altaf coloney,Gojra');

console.log(user1.about())

class Animal {
    constructor(animal_name, age) {
        this.AnimalName = animal_name
        this.age = age
    }
    about() { 
        return this.AnimalName + 'is an animal and its age is ' + this.age }
}

const anm = new Animal("Tiger",15)
console.log(anm.about())