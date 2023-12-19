

// const userMethods = {
//     is18: function() { 
//         return age>=18
//     },
//     about: function() {
//         return `${this.firstName} is ${this.age} years old`
//     }

// }

function CreateUser(fname,lname,email,age,address){ 
    this.firstName=fname;
    this.lastName=lname;
    this.email=email;
    this.age=age;
    this.address=address;
}
CreateUser.prototype.sing = function() { 
    console.log("lal lala alaala ala ala alalalala")
}


const user1= new CreateUser('Tanveer','Ahmad','tanveer@abc.com',47,'Samanzar Coloney,Gojran');

class abc{
    constructor(fname,lname,age,email){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.email=email;
    }
static 
    get fullname() {
            return `${this.fname} ${this.lname}`
    }
    set fullname(fullname) {
         const [fn,ln] =  fullname.split(" ")
          this.fname=fn;
          this.lname=ln;
    }
    about() {
        return `${this.fname} ${this.lname} is ${this.age} years old`
    }
}

const xyz = new abc('Tanveer','Ahmad',47,'tanveer@abc.com')
xyz.fullname="Muhammd Musa"
console.log (xyz.fullname)

// class fgh extends abc{
//     constructor(fname,lname,age,email,address,hobby) {
//         super(fname,lname,age,email)
//         this.address=address;
//         this.hobby=hobby
//     }
//     sing() { return this.fname + ' ' + this.lname + ' said la lala la la la'}
// }

// const klm = new fgh('tanveer','ahmad',47,'zyx@abc.com','Samanzar coloney','gardening')

// console.log(klm.about())
// console.log(klm.sing())

// console.log( xyz.about())

// console.log(user1)

// user1.sing()


// console.log(user1.about())
// function hello() {
//     console.log("Hello")
// }
// hello()
// hello.prototype.abc = "abc"
// hello.prototype.about=function() {
//     console.log("This is about function in prototype")
// }
// console.log(hello.prototype.about())