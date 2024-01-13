// Primitives vs refrense

// let num1 = 6;
// let num2 = num1;
// console.log("Value of num1 is" , num1)
// console.log("value of num2 is" , num2)
// num1++;
// console.log("after changing value of num 1")
// console.log("Value of num1 is" , num1)
// console.log("value of num2 is" , num2)

// Reference type 
// array

// let array1 = ["item1" , "item2"];
// let array2 = array1;
// console.log("Value of array1 is" , array1)
// console.log("value of array2 is" , array2)
// array1.push("item3")
// console.log("after pushing elements to array 1")
// console.log("Value of array1 is" , array1)
// console.log("value of array2 is" , array2)\


// 18/9/2023

// how to clone Array
// how to concatenate two array

// let array1 =["item1" ,"item2"];
// let array2 = array1.slice(0);

// let array2 = [].concat(array1, ["item3", "item4"])
// new way
// spread operator

// let array2 = [...array1]

// array1.push("item3")

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// for loop in array

// let fruits = ["apple", "mango", "grapes", "banana"];
// console.log(fuuits.length);
// console.log(fruits[fruits.length-2]);

// let fruits2 = [];

// for(let i=0; i < fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase())
// }
// console.log(fruits2)

// use const for creating array
// const fruits = ["apple", "mango"]
// fruits.push("banana")
// console.log(fruits)

// while loop in array
// const fruits = ["apple", "mango", "grapes"];
// let i = 0;
// while(i<fruits.length){
//      (fruits[i].toUpperCase)
//      i++;
// }

// for of loop in Array

const fruits = ["apple" , "mango" , "grapes"];

for(let fruit  of fruits){
     console.log(fruit)
}

// for in loop in array

// const fruits = [ 

// for(let i = 0; i<fruits.length; i++){
//      console.log(fruits[i]);
// }

// 19/9/23

// array destructuring

// const myArray = ["value1", "value2", "value3", "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2)
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2)
// console.log(myNewArray);

// Objects refrence type
// arrays are good but not sufficient for real world data
// objects store key value pairs
// objects don't jave indexe

// how to create objects
// const person ={
//      name:"Mahir",
//      age: 16,
//      hobbies: ["sleeping","cricket","listening music"]
// }
// console.log(person);

// // how to add key value pair to objects
// console.log(person.name);
// console.log(person.hobbies);

// // how to add key value pair to objects
// person.gender = "male";
// console.log(person);

// difference between dot and bracket nation
// let key = "email"
// let key2 = "phone number"
// const person ={
//      name:"Mahir",
//      age: 16,
//      "person hobbies": ["sleeping","cricket","listening music"]
// }
// console.log(person["person hobbies"]);
// person[key] = "mahirmahir8951@gmail.com";
// person[key2] = 7878218459;
// console.log(person);



// how to iterate object
const person ={
     name:"Mahir",
     age: 16,
     hobbies: ["sleeping" , "cricket","listening music"]
}
// for in loop

// for(let key in person){
//      console.log(`${key} : ${person[key]} `);
// }

// object.keys
// console.log(Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

// for(let key of Object.keys(person)){
//      console.log(person[key]);
// }    