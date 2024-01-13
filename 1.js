// // console.log("Hello World");

// // variables

//  let firstName = "Harshit";

// console.log(firstName[0]);

// firstName = "Mohit";

// console.log(firstName[3]);

// const lastName = "10";
// console.log(lastName * 2)
// console.log(Number("10"));
// let firstName = "    Harsit   ";

// console.log(firstName.length)
// console.log(typeof Number("10"));
// console.log(typeof String(10));
// console.log(typeof Boolean(10));
// firstName = firstName.trim()

// console.log(firstName)
// console.log(firstName.length)

// var a = 10;
// function fn(){
//     console.log(a);
// }
// fn()

// 14/9/2023 Thrusday



// let firstName = "Harshit";

// firstName = firstName.toLowerCase();

// console.log(firstName)

// let newString = firstName.slice(1,5)

// console.log(newString)

// let string1 = "17";
// let string2 = "10";

// let newString = +string1 + +string2;
// console.log(newString)

// let age = 22;
// let firstName = "Mahir";

// // let aboutMe = "My Name is" + firstName + "and my age is " + age;
// let aboutMe =`my name is ${firtstName} and my age is ${age}`
// console.log(aboutMe)


// let agse = 18;

// if(age>=18){
//     console.log("user can play ddlc")
// }else{
//     console.log("user can play mario")
// }

// let a = "mahir";
// if(a[0] === 'M'){
//     console.log(true);
// }else{
//     console.log(false);
// }
// let num = 14;
// if(num%2===0){
//     console.log("Even")
// }else{
// //     console.log("odd")
// // }
// console.log(12 == "12");
// console.log("12" === "12");
// // Ternary operator
// let age = 4;
// let drink = age>= 5 ? "coffee" : "milk";
// console.log(drink);

// let age2 = 18;
// let drink2 = age2>= 18 ? "Enter" : "play mario";
// console.log(drink2);

// 16/9/23

// let winningNumber = 19;
// let userGuess = +prompt("Guess a Number");

// if (userGuess === winningNumber){
//     console.log("your guess is right")
// }else{
//     if(userGuess < winningNumber){
//         console.log("Too low !!")
//     }else(
//         console.log("Too high")
//     )
// }


// let tempInDegree  = 44;

// if(tempInDegree < 0){
//     console.log("extreamly cold outside ")
// }else if(tempInDegree < 16){
//     console.log("It is cold outside")
// }else if(tempInDegree < 25){
//     console.log("weather is okey")
// }else if(tempInDegree < 35){
//      console.log("lets go to swim")
// }else if(tempInDegree < 45){
//     console.log("turn on AC")
// }else{
//     console.log("Too hot!")
// }


// let tempInDegree = 40;

// if(tempInDegree > 40 ){
//     console.log("too hot")
// }else if(tempInDegree > 30){
//     console.log("lets go to swim")
// }else if(tempInDegree > 20){
//     console.log("weather is cool")
// }else if(tempInDegree > 10){
//     console.log("it is very cool outside")
// }else{
//     console.log("extermly cold")
// }

// let day = 4;

// switch(day){
//     case 0:
//     console.log("Sunday");
//     break;
//     case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wednesday");
//     break;
//     case 4:
//     console.log("Thrusday");
//     break;
//     case 5:
//     console.log("Friday");
//     break;
//     case 6:
//     console.log("Saturday");
//     break;
//     default:
//     console.log("Invalid day")
// }

// for loop

// let fruits = ["apple", "mango", "banana","grapes"]
// const fruits2 = []

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// for(index in fruits){
//     console.log(fruits[index].toUpperCase());
// }


// while loop
let i = 0;
while(i<=9){
    console.log(i);
    i++;
}
// console.log(fruits);
// let total = 0;

// let num = 6;

// for(let i = 1;i<=num; i++){ //  i = i + 1
//   console.log(i);    
// }

// console.log(total)

// let a1 = 1;
// console.log(++a1);

// do while loop

// let i = 10;

// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// Array

// let fruits = ["Mangon" , "Grapes" , "Apple"]

// console.log(fruits)
// console.log(typeof fruits)
// console.log(Array.isArray(fruits))

// array push pop

// let fruits = ["Mangon" , "Grapes" , "Apple"];
// // push
// console.log(fruits)
// fruits.push("banana")
// console.log(fruits)

// pop
// let poppedFruit = fruits.pop();
// console.log(fruits)
// console.log("poped fruit is ",poppedFruit)


// let shift = ['fayyaz',"mahir",'adnan'];
// shift.shift();
// shift.unshift("uzair")
// console.log(shift);

// const fruits = ["apple" , "mango" , "grapes"];

// for(let fruit  of fruits){
//     console.log(fruits)
// }