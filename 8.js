// methods
// function inside object

// const person ={
//     firstName: "Mahir",
//     age:"16",
//     about:function() {
//         console.log(`First name is ${this.firstName} and age is ${this.age}`)
//     }
// }
// person.about();

// ....................

// function personInfo(){
//     console.log(`First name is ${this.firstName} and age is ${this.age}`)
// }
// const person1 ={
//     firstName: "Mahir",
//     age:"16",
//     about:personInfo
//     }
// const person2 ={
//     firstName: "Harshit",
//     age:"18",
//     about:personInfo
//     }
// const person3 ={
//     firstName: "Mohit",
//     age:"17",
//     about:personInfo
//     }

//     person1.about()
//     person2.about()
//     person3.about()


// .........................

// call,apply and bind

function  about(hobby, favMUsician){
    console.log(this.firstname, this.age, hobby , favMUsician);
}

const user1 = {
    firstname:"harshit",
    age: 9
}
const user2 = {
    firstname:"mohit",
    age: 9
}

// call
about.call(user1,"guitar","bach")

// apply
about.apply(user2,["guitar","bach"])

// bind
const func = about.bind(user1, "guitar","bach");
func()