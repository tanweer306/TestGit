
const JSUser = {
    name: "Tanveer",
    "full name": "Tanveer Ahmad",
    Age: "46",
    Logedin: false,
    Kids: ["zaryab", "zainab", "Musa", "Fatima"]
};
console.log(JSUser.Kids);
console.log(JSUser["name"]); //Better way of accessing object keys. The reason is as uder
console.log(JSUser["full name"]); //This kind of keys with spances can't be accessed by dot.

//Declaring & using a symbol as a key

console.log("using symbols as keys========================")
const empName = Symbol("name")
const age = Symbol("age")

const Emp = {
[empName] : "Muhammad Zeshan",
[age]: 26
}
console.log(Emp[empName], Emp[age]);
console.log(typeof Emp.Age)

//Changing values of an object

Emp[age] = 30;
console.log(Emp);

//objects can be freezed so that you can change any value

Object.freeze(Emp);

Emp[empName] = "Asad Ali"; // This change will not be done 
Emp[age] = 22;
console.log(Emp); 

//Functions can be used like other variables in JavaScript. we can use functions in objects also.

let Student = {
    name: "Zaryab Hassan",
    Class: "12th",
    Age: 16,
    doing: function() { 
        console.log("He is sleeping right now")
        return 15;
    }
}

console.log(Student);
console.log(Student.doing) // without parentheses only function reference will be printed, to execute a function we have to use parentheses.
console.log(Student.doing())

//The use of 'this' in objects

let Player = {
    name:"Babar Azam",
    Age: 36,
    greetings: function() {return `Hello My Name is ${this.name}`}

}
console.log(Player.greetings())

Player.eating = function () {
    return `${this.name} is eating pizza`
}

console.log (Player.eating())