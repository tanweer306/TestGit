//for each
//map
//filter
//reduce

const numbers = [4,5,8];

// function multiplyby2(number,index){
//     console.log(`index is ${index} and number*2 is ${number*2}`);
// }

// numbers.forEach(multiplyby2)

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} and number*2 is ${number*2}`); 
// });

numbers.forEach(function(number){
    //console.log(number*2); 
});

//real example of foreach

const users = [
        {fname:'Tanveer',age:46},
        {fname:'Asif',age:36},
        {fname:'ASAD',age:30},
        {fname:'Musa',age:15},
]

users.forEach(function(obj){
    // console.log(obj.fname + ' age=' + obj.age)
});

//using arrow function

users.forEach((obj)=>{
    // console.log(obj.fname + ' age=' + obj.age)
});


//==========MAP METHOD=============================
//Works like foreach method but returns an array of outputs

const retarr = numbers.map((number)=>{
      return number * number;
});
//console.log(retarr)

//Real example

const arr_fname = users.map( (obj)=>{
      return obj.fname
} );
// console.log(arr_fname);

//===========Filter Method=============
//Filter method also returns an array

const arr_filter = [45,76,44,32,8,90,23,52,40];

const oddnumbers = arr_filter.filter((num)=>{
      return !(num%2);
});

// console.log(oddnumbers)

//============Reduce Method=================

const arr_num = [1,2,3,4,5,6];

const sum = arr_num.reduce((accumulator,currentValue)=>{
     return accumulator + currentValue;
});
// console.log(sum);

//Real example

const users_cart = [
    {Id:1,pname:'mobile',price:15000},
    {Id:2,pname:'laptop',price:35000},
    {Id:3,pname:'watch',price:45000}
]

const total_amount = users_cart.reduce((total_price,current_product)=>{
       return total_price + current_product.price
},0) 
// console.log(total_amount)

//===========Arry Sort Method==========
//sort method will change the original array

const arr_sort=[34,76,18,189,245,7,1]

//arr_sort.sort() //this method will sort alphabetically
//to sort numerically we have to use callback function

arr_sort.sort((a,b)=>{
    //return a-b (to sort ascending)
    return b-a ; //to sort decending order
});

// console.log(arr_sort);

//Real Example of sort method

const products = [
    {pId:1,p_name:'mobile',price:15000},
    {pId:2,p_pname:'laptop',price:35000},
    {pId:3,p_pname:'watch',price:800},
    {pId:4,p_name:'TV',price:10000},
    {pId:5,p_pname:'Shoes',price:300},
    {pId:6,p_pname:'Shirt',price:700}
]

// products.sort((a,b)=>{
//         return a.price - b.price
// });
// console.log(products)

//dont want to change original array? clone array

const lowtohigh = products.slice(0).sort((a,b)=>{
        return a.price - b.price
});
// console.log(products);
// console.log(lowtohigh);

//===========find method==================

const arr_find = ['cat', 'lion', 'sperrow','dove'];

const reval = arr_find.find((string)=> string.startsWith('s'));
// console.log(reval)

//real example

const users_f = [
        {fname:'Tanveer',age:46},
        {fname:'Asif',age:36},
        {fname:'ASAD',age:30},
        {fname:'Musa',age:15}
]

const usr= users_f.find((userf)=> userf.age===30)
// console.log(usr)

//=================Every method=======================
const eNumbers=[2,4,6,8,40,31];

const ans = eNumbers.every((num)=> num%2===0)
// console.log(ans);

//real example, check if price is less than some value

const eproducts = [
    {pId:1,p_name:'mobile',price:15000},
    {pId:2,p_pname:'laptop',price:35000},
    {pId:3,p_pname:'watch',price:800},
    {pId:4,p_name:'TV',price:10000},
    {pId:5,p_pname:'Shoes',price:300},
    {pId:6,p_pname:'Shirt',price:700}
]

const e_ans = eproducts.every((obj)=> obj.price<30000)
// console.log(e_ans)

//====================some method=====================
// if any value meet the chriteria then it will return true
const s_ans = eproducts.some((obj)=> obj.price>30000)
// 'console.log(s_ans)

//======================Fill Method==================

const fill_arr = new Array(5).fill("Tanveer");
// console.log(fill_arr)
fill_arr.fill("nabeel",2,5);
// console.log(fill_arr)

//=====================Splice Method====================
//to delete items
spl=[1,2,3,4,5,6,7]
// spl.splice(1,2);
// console.log(spl)

//to Insert items
// spl.splice(5,1,'Item1')
// console.log(spl)

//insert/delete togather

const delItems= spl.splice(1,2,"T1",'T2');
console.log(spl)
console.log(delItems)

