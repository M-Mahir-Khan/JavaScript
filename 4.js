 g            // Functions   *
// function decleration


// function singHappyBirthdayToYou(){
//     console.log("Happy Birthday to You......");
// }
// singHappyBirthdayToYou();
// singHappyBirthdayToYou();
// // .........

// function sumTwoNumbers(number1,number2  ){
//     return number1 + number2;
// }

// const returnedvalue = sumTwoNumbers(2,3)
// console.log(returnedvalue);
// ..........

// function isEven(number){ 
//     return number  % 2 === 0;
// }
// console.log(isEven(4));
// ..........

// function firstChar(anyString){
//     return anyString[0]
// }
// console.log(firstChar("Mahir"));
// ........

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90];
// const ans = findTarget(myArray, 90)
// console.log(ans);

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// const myArray = [1,2,6,67];
// const ans = findTarget(myArray, 90)
// console.log(ans);

// function expression

// const singHappyBirthdayToYou = function(){
//         console.log("Happy Birthday to You......");
//     }


// const sumTwoNumbers = function(number1,number2  ){
//         return number1 + number2;
//     }


// const isEven = function(number){ 
//     return number  % 2 === 0;
//     }


// const firstChar = function(anyString){
//     return anyString[0]
// }


// const findTarget = function(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }


// Arrow Function

// const singHappyBirthdayToYou = function(){
//     console.log("Happy Birthday to You......");
// }

// const singHappyBirthdayToYou = () =>{
//     console.log("Happy Birthday to You......");
// }

// const sumTwoNumbers = (number1,number2 ) => {
//     return number1 + number2;
// }


// const isEven = number => number  % 2 === 0;

// const firstChar = anyString => anyString[0];

// const findTarget = (array, target) =>{
// for(let i = 0; i<array.length; i++){
//     if(array[i]===target){
//         return i;
//     }
// }
// return -1;
// }



// function inside function
// function app(){
//     const myFunc = () =>{
//         console.log("hello from myfunc");
//     }

//     const addTwo = (number1, number2)=>{
//         return number1 + number2;
//     }

//     const mul = (num1, num2) => num1* num2;

//     console.log("inside app");
//     myFunc()
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app()



// default parameters
// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a + b;
// }

// function addTwo(a,b){
//     return a+b;
// }

// const ans = addTwo(4);
// console.log(ans);


// rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);*
// }
// myFunc(3,4,5,6,7,8);


// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(4,5,6,7)
// console.log(ans);


// param deructuring
// object
// react

// const person = {
//         firstname: "Mahir",
//         gender: "male",
//         age: 16
// }

// // function printDetails(obj){
// //         console.log(obj.firstname);
// //         console.log(obj.gender);
// //         console.log(obj.age);
// // }

// function printDetails({firstname, gender, age}){
//         console.log(firstname);
//         console.log(gender);
//         console.log(age);
// }
// printDetails(person);


// callback function 

// function myfunc2(name){
//         console.log("inside my func 2");
//         console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//         console.log("hello there I am a func and I can...");
//         callback("Mahir");
// }
// myFunc(myfunc2)


// funtion  returning function

// function myFunc(){
//         function hello(){
//                 return "hello world"
//         }
//         return hello
// }

// const ans = myFunc();
// console.log(ans());

// important array methods
// forEach

// const numbers = [4,2,5,8];
// function myFunc(number, index){
//         console.log(`index is ${index} number is ${number}`);
// }
// numbers.forEach(myFunc)
// ......

// numbers.forEach(function(number,index){
//         console.log(`index is ${index} number is ${number}`);
// })
// .........

// numbers.forEach(function(number, index){
//         console.log(number*2, index);
// })
// .........

const users = [
        {firstName: "harshit", age: 23},
        {firstName: "mohit", age: 21},
        {firstName: "nitish", age: 22},
        {firstName: "garima", age: 20},
]
users.forEach(function(user){
        console.log(user.firstName);
})

// map method
// const numbers = [2,3,4,6,8];

// const square = function(number){
//         return number + number;
// }

// const squareNeumbr = numbers.map((number)=>{
//         return number + number;
// });
// console.log(squareNumber);

// const array = [1,2,3,4,5]
// const multiply = array.map((number)=>{
//         return number + number;
// });
// console.log(multiply);
// ........

// const users = [
//         {firstName: "harshit", age: 23},
//         {firstName: "mohit", age: 21},
//         {firstName: "nitish", age: 22},
//         {firstName: "garima", age: 20},
// ]

// const userName = users.map((user)=>{
//         return user.firstName
// })

// console.log(userName);



// filter method

// const numbers = [1,2,3,4,5,6,7,8]

// const evenNumber = numbers.filter((number)=>{
//         return number % 2 ===0;
// })

// const oddNumber = numbers.filter((number)=>{
//         return number%2!==0;
// })
// console.log(oddNumber);
// console.log(evenNumber);



// reduce method

// const numbers = [1,2,3,4,5,10];
// // aim sum of all hte numbers in array

// const sum = numbers.reduce((accumulator, currentValue)=>{
//         return accumulator + currentValue
// });
// console.log(sum);

// accumulator , currentValue ,    return
// 1                    2           3
// 3                    3           6
// 6                    4           10
// 10                   5           15  
// 15                   10          25
// ...........

// const userCart = [
//         {productId: 1, productName: "mobile", price: 12000},
//         {productId: 2, productName: "laptop", price: 22000},
//         {productId: 3, productName: "Tv", price: 15000}
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//         return totalPrice + currentProduct.price;
// },0)

// console.log(totalAmount);

// rivision practice

// let num = [1,2,3,4,5,6];
// let num2 = [7,8,9,23,24,]

// console.log(num.join("-"));

// num.pop();

// num.push(89)

// num.shft()

// num.unshift(3)

// delete num[2]

// let newArray = num.concat(num2)
// console.log(newArray);

// num.sort()

// num.splice(2,1,23,24)

// num.slice(2,3)

// console.log(num); 

// map method
// let arr = [45, 23 , 21];
// let a = arr.map((value , index)=>{
//         console.log(value, index)
//         return value + 1 
// })
// console.log(a);

// filter method
// let arr2 = [45, 23 , 21, 1, 9, 5,4];
// let a2 = arr2.filter((a)=>{
//         return a<10
// })
// console.log(a2);

// reduce method
// let arr3 = [1,2,3,4,5,2,1];
// let a3 = arr3.reduce((accumulator, currentvalue)=>{
//         return accumulator + currentvalue
// })
// console.log(a3);