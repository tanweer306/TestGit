//another problem is if we have thousands of methods 
//in emp_methods then we will have to write code in the 
// create_emp function also to call these.

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

// solution=============================================

const user_methods={
    about: function() {
        return `${this.fname} is ${this.age} years old`
    },
    is18: function(){
        return this.age >=18;
    }
}

function creat_user(fname,lname,email,age,address) {
    const user = Object.create(user_methods);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = creat_user('Waris','ALI','asad@gmail.com',30,'Altaf coloney,Gojra');

console.log(user1)
console.log(user1.about())
console.log(user1.is18())