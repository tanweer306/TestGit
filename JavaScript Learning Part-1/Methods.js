// Methods - 
//Functions inside objects


const person = {
    fname: 'Tanveer',
    lname: 'Ahmad',
    age: 46,
    about: function() {
        console.log(`my name is ${this.fname} ${this.lname}`)
    }
}

person.about()


function userinfo() {
    console.log(`my name is ${this.fname} ${this.lname}`)
}

const User1 = {
    fname: 'Tanveer',
    lname: 'Ahmad',
    age: 46,
    about: userinfo
}
const User2 = {
    fname: 'Zaryab',
    lname: 'Hassan',
    age: 18,
    about: userinfo
}
const User3 = {
    fname: 'Muhammad',
    lname: 'Musa',
    age: 14,
    about: userinfo
}

User1.about();
User2.about()
User3.about()

