const obj={name:"Tanveer",age:22};
console.log(obj);

console.log(obj.name);
console.log(obj.age);

const person={
    name:'Tanveer Ahmad',
    age:46,
    hobies:['reading','sleeping','eating']
}

console.log(person.hobies);
console.log(person["name"]);
console.log(person.name);

//add key value pair
person.gender="Male"
console.log(person)

person["address"] = "samanzar";

const key = 'email';
person[key] = "tanveer@gmail.com";
console.log(person);

//iterate objects
//for in loop
// object.keys

for (let key in person) {
   //console.log( person[key])
   console.log(`${key} : ${person[key]}`)

}

//computed properties

const key1 = "name";
const key2 = "age";
const val1 = "Musa";
const val2 = "14";

const kid = {
    [key1] : val1,
    [key2] : val2
}
console.log(kid);

//Object destructuring
let emp = {
    empname:"Zahid",
    ephone: "03007603007",
    empmail: "zahid@zyx.com"
}

let {empname,ephone,empmail} = emp;
console.log(empname,ephone,empmail)

//Spread operator in objects

let student = {
    name: "Zaryab",
    class: "12th",
    school: "EGC"
}
let result={
    urdu:98,
    english:88,
    math:95,
    bio:85
}
let studentdata = {...student,...result};
console.log(studentdata);

//array of objects
let users = [
    {id:1,fname:'Tanveer',gender:'male'},
    {id:2,fname:'Asad',gender:'male'},
    {id:3,fname:'Sana',gender:'female'}
];

for(let user of users) {
console.log(user);
}

const [user1,user2,user3]=users;



