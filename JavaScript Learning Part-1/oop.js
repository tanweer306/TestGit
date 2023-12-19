const user = {
    fname:'Tanveer',
    lname:'Ahmad',
    email:'tanveer@gmail.com',
    age:46,
    address: 'Samanzar coloney, gojra',
    about: function() {
        return `${this.fname} is ${this.age} years old`
    },
    is18: function(){
        return this.age >=18;
    }
}
console.log(user)

// if we need millions of similar user objects?
//we will create a function which we will 
//take user data and return a user object

//1-function(which will create the object).
//2- Add key:value pairs.
//3- will return the object.

function create_user(fname,lname,email,age,address) {
    const user = {};
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `${this.fname} is ${this.age} years old`
    }
    user.is18 = function(){
        return this.age >=18;
    }
    return user;
}

const user1 = create_user('ASAD','ALI','asad@gmail.com',30,'Altaf coloney,Gojra');
console.log(user1);
console.log(user1.about())
console.log(user1.is18())

