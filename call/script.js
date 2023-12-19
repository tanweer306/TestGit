

function PersonInfo(hobby,favmusic){
    console.log(`My name is ${this.name} and my age is ${this.age}, My hobby is ${hobby} and my faverot musician is ${favmusic}`)
}




const user1 =  {
    name:"Tanveer",
    age:46,
    about: PersonInfo
}

const user2 =  {
    name:"ASAD",
    age:27,
    about:PersonInfo
}

const Parameters =['Jhoomna','Nargis']

user2.about.apply(user1,Parameters)

const myFunc = user2.about.bind(user2, "Planting","Pandas");

// myFunc()

PersonInfo.call(user1,"Music","Mozart")
