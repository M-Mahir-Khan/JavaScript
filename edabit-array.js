// Create a function that takes an array containing only numbers and return the first element.

// Examples
// function getFirstValue(arr){
//     // return arr.shift()
//     // return arr[0];
//     // return arr.at(0)
// }
// console.log(getFirstValue([1, 2, 3])); 
// console.log(getFirstValue([80, 5, 100]));  
// console.log(getFirstValue([-500, 0, 50])); 


// 2)....................................................

// Given two arguments, return an array which contains these two arguments.

// function makePair(num1, num2){
//  return [num1,num2]
// }

// const ans1 = makePair(1, 2)
// const ans2 = makePair(51, 21)
// const ans3 = makePair(512124, 215)
// console.log(ans1);


// 3)................................................

// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.

// Examples

// function drop(arr, n){
//     if(n >= arr.length){
//         return []
//     }
//     return arr.slice(n)
// }
// console.log(drop([1, 2, 3], 1));


// 4)..................................................

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// Examples

// function addition(number){
//     return number + 1
// }

// const ans = addition(-1)
// console.log(ans);


// 5).............................................

// Write a function that takes an integer minutes and converts it to seconds.

// Examples

// function convert(minute){
// return minute * 60
// }


// const seconds = convert(3)
// console.log(seconds);

// convert(3) ➞ 180
// convert(2) ➞ 120

// 6)............................................

// Write a function to reverse an array.

// Examples
// const reverse = array => array.reverse()


// const ans = reverse([1, 2, 3, 4]) 
// console.log(ans);

// 7).............................................

// you can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

// Answer
// const arr = [1, 2, 3, 4, 5, 6]
// const [a,b,...rest] = arr;

// 8)............................................................
// Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
//     return arr.pop()
// }
// const returnValue = getLastItem([1, 2, 3]) 
// console.log(returnValue);

// getLastItem([1, 2, 3]) 
// getLastItem(["cat", "dog", "duck"]) 
// getLastItem([true, false, true]) 


// 9)......................................................;
// Create a function that takes an array of numbers or letters and returns a string.

// Examples

// function arrayToString(arr){
//     return arr.toString()
// }
// const returnValue = arrayToString([1, 2, 3, 4, 5, 6]) 
// console.log(typeof returnValue);

// // arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// // arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


// 10)..............................................................
// Create a function to concatenate two integer arrays.

// function concat(arr1, arr2) {
// 	return arr1.concat(arr2)
// }
// const ans = concat([1, 3, 5], [2, 6, 8])
// console.log(ans);

// concat([7, 8], [10, 9, 1, 1, 2])

// 11).............................................................
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples

// function findIndex(arr,string){
//     return arr.indexOf(string)
// }
// const index = findIndex(["hi", "edabit", "fgh", "abc"], "fgh")
// console.log(index);


// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// 12)..............................................................
// Create a function that finds the index of a given item.

// Examples

// function search(arr, item) {
// 	return arr.indexOf(item);
// }

// const index = search([1, 5, 3], 5) 
// console.log(index);
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1

// 13)..............................................

// Write a function to check if an array contains a particular number.

// Examples
// function check(arr, num){
//     return arr.includes(num)
// }

// const returnValue = check([1, 2, 3, 4, 5], 3)
// console.log(returnValue);

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false


// 14)...........................................................

// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Examples\

function arrBetween(num1, num2, arr) {
    
}
console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));  //➞ [5, 4, 7]
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));  //➞ [8, 6]
console.log(arrBetween(7, 32, [1, 2, 3, 78]));  //➞ []

// 15)..................................................................

// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// 16)........................................................................

// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples

// const hasSameBread = (arr1,arr2 )=> arr1[0] === arr2[0] && arr1[2] === arr2[2];
// console.log(
// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) )

// const hasSameBread = (arr1,arr2)=>{
//     const [a,b,c] = arr1;
//     const [x,y,z] = arr2;
//     return a===x && c===z;
// }
// console.log(
// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) )

// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false

// 17).............................................

// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples

// function parseArray(arr) {
//   return arr.map(String)
// }
// const ans =  parseArray([]);
// console.log(ans);
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

// parseArray([]) ➞ []

// 18)............................................................

// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// const toNumberArray = (arr)=> arr.map(Number);
// const returnValue = toNumberArray(["9.4", "4.2"]) ;
// console.log(returnValue);

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

// 19).....................................................

// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples

// function arrayValuesTypes(arr){
//   return typeof(arr)
// }
// const typeOf = arrayValuesTypes([1, 2, "null", []]);
// console.log(typeOf);
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]


// ...........................................................

// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false
// checkSquareAndCube([9, 27]) ➞ true

// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples]

// function totalAmountAdjectives(obj) {
//     return Object.keys(obj).length
// }

// const returnValue = totalAmountAdjectives({ a: "moron" })
// console.log(returnValue);

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4