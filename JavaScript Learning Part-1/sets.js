//sets are also iterables, does't have duplicate values like arrays
// store dats
// also have its own methods
//No index-based access of elements
//order is not gaurantee
//unique items only

const myset=new Set([1,2,3,3,2]);

console.log(myset)

const strset=new Set("Tanveer");
console.log(strset)

const myArr = [2,3,6,7,8,9,3,4,5,6,7,34,5,6]
const myarrset = new Set(myArr); // to get unique values of array

console.log(myArr)
console.log(myarrset) 

for (arr of myarrset) {
    console.log(arr)
}


