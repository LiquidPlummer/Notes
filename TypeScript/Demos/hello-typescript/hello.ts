class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }

  toString(): string {
    return `Person(name: ${this._name}, age: ${this._age})`;
  }
}

// Usage
const person = new Person("Alice", 30);
person.name = "Kyle"
console.log(person.toString()); // Person(name: Alice, age: 30)
person.age = 31;
console.log(person.name); // Alice