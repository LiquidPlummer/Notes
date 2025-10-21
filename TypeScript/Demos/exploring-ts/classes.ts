class Animal {
    private _species: string;

    constructor(species: string){
        this._species = species;
    }

    set species(species: string) {
        this._species = species;
    }

    get species(): string {
        return this._species;
    }
}

// let x = new Animal("dog");
let y = "hello"
let z = 5
let myObject = {name: "Kyle", age: 41}