// function (that function reate object)
// add key value pair
// object ko return krega
// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function (){
//         return `${this.firstName} is ${this.age} year old.`;
//     };
//     user.is18 = function (){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit','vashit','harshit@gmail.com',19,'my address');
// console.log(user1);
// const about = user1.about();
// const is18 = user1.is18();
// console.log(is18);
// console.log(about);



// ..........................................

// const userMethods = {
//     about : function (){
//         return `${this.firstName} is ${this.age} year old.`;
//     },
//     is18 : function (){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('harshit','vashit','harshit@gmail.com',19,'my address');
// const user2 = createUser('harsh','vashit','harshit@gmail.com',19,'my address');
// const user3 = createUser('mohit','vashit','harshit@gmail.com',19,'my address');
// console.log(user1.about();)


// ..........................................

// const userMethods = {
//     about : function (){
//         return `${this.firstName} is ${this.age} year old.`;
//     },
//     is18 : function (){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser('harshit','vashit','harshit@gmail.com',19,'my address');
// const user2 = createUser('harsh','vashit','harshit@gmail.com',19,'my address');
// const user3 = createUser('mohit','vashit','harshit@gmail.com',19,'my address');
// console.log(user1.about())


// .......................
// prototype

// const userMethods = {
//     about : function (){
//         return `${this.firstName} is ${this.age} year old.`;
//     },
//     is18 : function (){
//         return this.age >= 18;
//     }
// }
// 

// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function (){
//     return `${this.firstName} is ${this.age} year old.`;
// };
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }

// const user1 = createUser('harshit','vashit','harshit@gmail.com',19,'my address');
// const user2 = createUser('harsh','vashit','harshit@gmail.com',19,'my address');
// const user3 = createUser('mohit','vashit','harshit@gmail.com',19,'my address');
// console.log(user1.about())


// .........................
// new keywod
// 1.)this = {}
// 2.) return {}

// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function (){
//     return `${this.firstName} is ${this.age} year old.`;
// };
// CreateUser.prototype.is18 = function(){pm
//     return this.age >= 18;
// }

// const user1 = new CreateUser('harshit','vashit','harshit@gmail.com',19,'my address');
// const user2 = new CreateUser('harsh','vashit','harshit@gmail.com',19,'my address');
// const user3 = new CreateUser('mohit','vashit','harshit@gmail.com',19,'my address');
// console.log(user1.about())


// ................................
// class keyword

class CreateUser{
    constructor(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} year old.`;
    }
    is18(){
        return this.age >= 18
    }
}

const user1 = new CreateUser('harshit','vashit','harshit@gmail.com',19,'my address');
const user2 = new CreateUser('harsh','vashit','harshit@gmail.com',19,'my address');
const user3 = new CreateUser('mohit','vashit','harshit@gmail.com',19,'my address');
