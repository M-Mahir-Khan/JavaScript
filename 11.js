// getter and setters
class Person{
    constructor(firstName,lastName, age){   
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }   
}

const Person1 = new Person("harshit", "sharma", 5);


let arr = [1,2,3,4,5,6,7];

const add = arr.map(elm => elm + 1 );
console.log(add);

