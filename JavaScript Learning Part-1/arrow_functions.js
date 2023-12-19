
const user1 = {
    fname:'Tanveer',
    age:46,
    about: function() {
        console.log(this.fname,this.age)
    }
}

user1.about();

// arrow function does't have default 'this'. it take this from its surrounding. its 'this' is 1 level up. so its 'this' will be window object if we use it. 

const user2 = {
    fname:'Tanveer',
    age:46,
    about: ()=> {
        console.log(this.fname,this.age)
    }
}

user2.about();

// we can write function in short way like this

const user3 = {
    fname:'Tanveer3',
    age:46,
    about(){
        console.log(this.fname,this.age)
    }
}
user3.about();