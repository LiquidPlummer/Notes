class Person {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
    toString() {
        return `Person(name: ${this._name}, age: ${this._age})`;
    }
}
// Usage
const person = new Person("Alice", 30);
person.name = "Kyle";
person._age = 40
console.log(person.toString()); // Person(name: Alice, age: 30)

console.log(person.age); // Alice