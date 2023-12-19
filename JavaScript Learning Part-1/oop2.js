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

// There are some drawback of this methd, e.g 
// if we create multiple objects the similar 
// methods will be created in all user objects
// if we have 1 million users then 1 million 
// methods will also be created in memory
// a lot of memory waste
// we need to have only one copy of this method

const emp_methods={
    about: function() {
        return `${this.fname} is ${this.age} years old`
    },
    is18: function(){
        return this.age >=18;
    }
}

function create_emp(fname,lname,email,age,address) {
    const emp = {};
    emp.fname = fname;
    emp.lname = lname;
    emp.age = age;
    emp.address = address;
    emp.about = emp_methods.about;
    emp.is18 = emp_methods.is18;
    return emp;
}

const emp1 = create_emp('ASAD','ALI','asad@gmail.com',30,'Altaf coloney,Gojra');

console.log(emp1)
console.log(emp1.about())
console.log(emp1.is18())