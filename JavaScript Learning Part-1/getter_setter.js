class person {
    constructor(fname,lname,age) {
        this.fname = fname;
        this.lname = lname;
        this.age= age;
    }

    static class_info() {
        return "This is a person class"
    }
    static class_desc = "This is class description";

   get FullName() { return this.fname + ' ' + this.lname}

   set FullName(full_name) {
       const [fname, lname] = full_name.split(' ');
       this.fname = fname;
       this.lname = lname;
   }

}

const emp = new person("Tanveer","Ahmad",46);

console.log(emp)
//console.log(emp.FullName())
// if we want to use fullname as a property instaed of a funcion call then we use 'get' before the function in class. this is called getter.

console.log(emp.FullName)
emp.FullName = "Zaryab Hassan"
console.log(emp.FullName)

//static methods & properties can't be called by the instance of a class. these can be called direcly by the class

//console.log(emp.class_info()) // this is wrong

console.log(person.class_info())
console.log(person.class_desc)