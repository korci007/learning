//Evaluate these:
//#1
[2] === [2] //false
{} === {}  //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

// object1 = { a: 4};
// object2 = { a: 4};
// object3 = { a: 4};
// object4 = { a: 5};


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type);
        this.color = color;
    }
    sound() {
        console.log(`My name MOOO is ${this.name}, my type is MOOO a ${this.type}, and my color MOOO is ${this.color}. MOOOOO!`);
    }
}

const someCow = new Mamal('Riska','cow','brown');

console.log(someCow)