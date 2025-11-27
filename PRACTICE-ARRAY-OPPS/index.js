console.log("HELLO IAM HARIS");
console.log(6*2);
const myarray = [1 , 2 , 3 ,4 ,5];
console.log(myarray);

class Person {
    constructor(name,age){
    this.name = name;
    this.age = age;
}

greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
}
const p1 = new Person("HARIS", 19);
p1.greet();

const car = {
    brand:"Toyota",
    start(){
        console.log("car has started");
    }
};
car.start();

let age = 18;

if(age > 20){
    console.log("you are not adult");
}
    else{
        console.log("you are adult");
    }
