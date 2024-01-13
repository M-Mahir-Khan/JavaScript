// computed properties

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }
let main =  'fayyaz kailji';
console.log(main.length);

let array = ['fayyaz','khilji'];
console.log(array.length);


// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);



// spread operator

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = [...array1, ...array2]
// console.log(newArray);

// spread operator in objects
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// }

const obj2 = {
    key3: "value3",
    key4: "value4",
}

// const newObject = {...obj1, ...obj2}
// console.log(newObject)



// object destructuring
const band ={
    bandName:"led zepplin",
    famousSong:"stairway to heaven",
    year:1968,
    anotherFamousSong:"kashmir",
}
let {bandName, famousSong,} = band;
console.log(bandName);
console.log(famousSong);

// objewcts inside array 
// very useful in real world application

// const users = [
//     {userId: 1,firstname: "Mahir", gender:"male"},
//     {userId: 2,firstname: "Shahid", gender:"male"},
//     {userId: 3,firstname: "Harry", gender:"male"}
// ]

// for(let user of users){
//     console.log(user.firstname);
// }

// nestded destructuring

const users = [
    {userId: 1,firstname: "Mahir", gender:"male"},
    {userId: 2,firstname: "Shahid", gender:"male"},
    {userId: 3,firstname: "Harry", gender:"male"}
]

const [{firstname: user1firstName} , ,{gender: user3firstName}] = users;
console.log(user1firstName);
console.log(user3firstName)

