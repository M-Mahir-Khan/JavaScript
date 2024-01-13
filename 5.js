// // Sort Method
// let numbers = [1200, 3000, 5,9,1500];
// numbers.sort((a,b)=>{
//     return a-b
// })
// console.log(numbers);

// // price lowToHigh & high to low
// const  products = [
//     {productId: 1, productName: "p1", price:300},
//     {productId: 2, productName: "p2", price:3000},
//     {productId: 3, productName: "p3", price:200},
//     {productId: 4, productName: "p4", price:8000},
//     {productId: 5, productName: "p5", price:500},
// ]

// // lowToHigh
// const lowToHIgh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });
// console.log(lowToHIgh);

// const highToLow = products.slice(0).sort((a,b)=>{
//     return b.price-a.price
// })
// console.log(highToLow);


// ........

// find Method

// const myArray = ["hello", "cat", "dog","lion"];
// const ans = myArray.find((a)=>a.length===3);
// console.log(ans);

// const users = [
//     {userId:1, userName:"Mahir"},
//     {userId:2, userName:"harsh"},
//     {userId:3, userName:"mohit"},
//     {userId:4, userName:"harshit"},
//     {userId:5, userName:"nitish"},
// ]

// const myUser = users.find((user)=>user.userId===3);
// console.log(myUser);


// Every method

// const numbers = [2,4,6,8,10];
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);

// const userCart = [
//     {productEd: 1, productName: "mobile", price:12000},
//     {productEd: 2, productName: "laptop", price:12000},
//     {productEd: 3, productName: "tv", price:12000},
// ]

// const ans = userCart.every((cartItem)=>cartItem.price < 30000)
// console.log(ans);


// some method

// const userCart = [
//         {productEd: 1, productName: "mobile", price:12000},
//         {productEd: 2, productName: "laptop", price:12000},
//         {productEd: 3, productName: "tv", price:12000},
//         {productEd: 3, productName: "Macbook", price:250000},
//     ]

//     const ans = userCart.some((cartItem)=>cartItem.price > 100000)
//     console.log(ans);


// fill method
//value, start, end

// const myArray = new Array(10).flll(0);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8,9];
// myArray.fill(0,2,5)
// console.log(myArray);


// iterables
// jispe ham for of loop laga sakte he
// string , array ate iterable

// const firstname = "Mahir";
// for(let char of firstname){
//     console.log(char);
// }

// const items = ['item1', 'item2','item3'];
// for(let item of items){
// console.log(item);
// }


// array loke object
// jinke pass length property hoti he
// aur jinko ham idex se access kar skte he
// example:- string

const firstName = "harshit";
console.log(firstName.length);
console.log(firstName[2]);