

class Animal {
    constructor(animal_name, age) {
        this.AnimalName = animal_name
        this.age = age
    }
    about() { 
        return this.AnimalName + ' is an animal and its age is ' + this.age }
}

const anm = new Animal("Tiger",15)
//console.log(anm.about())


class Dog extends Animal {
     constructor(animal_name,age,color) {
        super(animal_name,age)
        this.color = color
     }

     eat() { return `${this.AnimalName} eats meat`}

}

const mydog = new Dog("Tomy",5,"black");

console.log(mydog.about())
console.log(mydog.eat())
console.log(mydog.color)