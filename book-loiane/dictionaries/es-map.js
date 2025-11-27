const privateData = new WeakMap();
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        privateData.set(this, { ssn: 'xxxx-xx-xxxx', medical: true });
    }
    getSSN() {
        return privateData.get(this)?.ssn;
    }
}
