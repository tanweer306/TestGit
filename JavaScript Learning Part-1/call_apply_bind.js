//call apply & bind methods

const user1 = {
    fname:'Tanveer',
    age:46,
    about: function() {
        console.log(this.fname,this.age)
    }
}

user1.about();


const user2 = {
    fname:'Musa',
    age:15,
}
// we can borrow the function of user1 object 
//by call methods by passing the user2 object
// to use for 'this' class
user1.about.call(user2);

//if we use call method without a parameter the output will be undefined. we have to pass an object for 'this' calss in the call method.
user1.about.call();

//for user1 we use the function without call method then we don't have to pass any parameter.
user1.about()

//we can pass extra arguments values in call method.
const person1 = {
    fname:'Tanveer',
    age:46,
    about: function(hobby,favMusic) {
        console.log(this.fname,this.age,hobby,favMusic)
    }
}
const person2 = {
    fname:'Asad',
    age:36,
}

person1.about.call(person2,"Gardening","Guitar")

// we can write the function seperately and set the value of this by any aboject

function about_emp (hobby,favMusic) {
    console.log(this.fname,this.age,hobby,favMusic)
}

const emp1 = {
    fname:'empTanveer',
    age:46,
}
const emp2 = {
    fname:'empAsad',
    age:36,
}

about_emp.call(emp1,"Gardening","Guitar")

//apply : apply is just like call but in apply we can pass a list(array) of arguments'

about_emp.call(emp2,["Gardening","Guitar"])

//Bind : bind will return a function
const myfunc = about_emp.bind(emp1,"bind1","programming")
myfunc()

//don't do this mistake

const st1 = {
    fname:'Asif',
    age:40,
    about: function() {
        console.log(this.fname,this.age)
    }
}

const stfunc = st1.about;
stfunc() // this function will not work properly. in this practice we did't call the function just assign the function to stfunc, so stfunc don't have any 'this' object to use. 

// proper method of this type of calling is by call method
const stfunc2 = st1.about.bind(st1);
stfunc2()
