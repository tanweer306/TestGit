//this is an object. 
//This is called object literals also
// in objects keys are always strings or symbols


// const person = {
//     firstname:'tanveer',
//         age:46,
//            1:'one' }

// console.log(person.firstname);
// console.log(person.age);
// console.log(person['1']); // keys are always string
// for(let key in person ) {
//     console.log(key + ":" + typeof(key));
// }

//Maps also stores key:value pairs but keys can be of any type

const map_person = new Map();
//console.log(map_person)

map_person.set('fname','Zahid');
map_person.set('age',46);
map_person.set(1,"one");
console.log(map_person);

//how to get values from map
console.log(map_person.get('fname'));
console.log(map_person.get(1));

console.log(map_person.keys())

// map is also iterable like arrays & strings
for(let key of map_person.keys()) {
    console.log(key, typeof(key))
}

//keys can be arrays & objects also

const person = {
    id:1,
    fname: 'Muhammad',
    lname: 'Musa'
}
const UserInfo = new Map();
UserInfo.set(person, {age:54, gender:'male'});

console.log(UserInfo);
console.log(UserInfo.get(person).age)

 
// map_person.set('dress',['Shirt','Pent','Coat'])
// map_person.forEach((key)=>{
// if (Array.isArray(key)){
//     for(let x of key) {
//         console.log (x)
//     }
// }else {
//     console.log(key);
// }
// });

//The major difference between Maps & object is
//