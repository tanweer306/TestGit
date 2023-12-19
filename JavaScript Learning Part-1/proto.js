const obj1 = {
    key1:'value1',
    key2:'value2',
    key3:'value3',
}

const obj2 = Object.create(obj1);
console.log(obj2)

obj2.key4='value4';
obj2.key5 = 'value5';

console.log(obj2)

//now obj2 has 2 key:value pairs, but if we try to 
// check obj2.key1, then JS will try to find it in
//obj2 if faild then it will find it its proto which is
// obj1 and return its value

console.log(obj2.key1)

//to check values of proto

console.log(obj2.__proto__);