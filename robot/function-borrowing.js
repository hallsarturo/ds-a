class Dog {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    aboutYou() {
        return console.log(
            `My name is ${this.name}. I am a ${this.breed}, and I am ${this.age} years old`
        );
    }

    woof() {
        return console.log('WOOF!!!');
    }
}

let snow = new Dog('Snow', 4, 'Husky');
snow.aboutYou();
snow.woof();

class Cat {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    meow() {
        return console.log('MEOW!!');
    }
}

let mermelada = new Cat('mermelada', 2, 'British Shorthair');
snow.aboutYou.call(mermelada);

function myFunction() {
    console.log(this);
}
myFunction();