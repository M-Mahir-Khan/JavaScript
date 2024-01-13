// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplecate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key 
// in maps you can use anything as key 
// leke array , number , string

const person = new Map();
person.set('firstname', 'Mahir');
person.set('age', 16);
person.set(1, 'one');
console.log(person);
console.log(person.get("firstname"));
for(let key of person.keys()){
    console.log(key);
}



// const persosn1 = {
//     id: 1,
//     firstName:"harshit"
// }

// const extraInfo = new Map();
// extraInfo.set(persosn1, {age: 8, gender:"male"});
// console.log(extraInfo);
// console.log(persosn1.id);
// console.log(extraInfo.get(persosn1).gender);