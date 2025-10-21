var Animal = /** @class */ (function () {
    function Animal(species) {
        this._species = species;
    }
    Object.defineProperty(Animal.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (species) {
            this._species = species;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
// let x = new Animal("dog");
var y = "hello";
var z = 5;
var myObject = { name: "Kyle", age: 41 };
