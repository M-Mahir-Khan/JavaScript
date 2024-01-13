// class practice

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return cute
    } 
}

class dog extends Animal{
    constructor(name, age, speed){
        super(name,age)
        this.speed = speed;
    }
}

const tommy = new dog("tommy", 3,45);
console.log(tommy);
console.log(tommy.speed);