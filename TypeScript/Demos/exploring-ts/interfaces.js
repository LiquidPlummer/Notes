var GasCar = /** @class */ (function () {
    function GasCar() {
        this.locked = true;
        this.started = false;
        this.distance = 0;
    }
    GasCar.prototype.open = function () {
        if (this.locked) {
            this.locked = false;
        }
    };
    ;
    GasCar.prototype.close = function () {
        if (!this.locked) {
            this.locked = true;
        }
    };
    ;
    GasCar.prototype.start = function () {
        if (!this.started) {
            this.started = true;
        }
    };
    ;
    GasCar.prototype.stop = function () {
        if (this.started) {
            this.started = false;
        }
    };
    ;
    GasCar.prototype.go = function (distance) {
        this.distance += distance;
        console.log("Vroom Vroom!");
        return this.distance;
    };
    return GasCar;
}());
var Helicopter = /** @class */ (function () {
    function Helicopter() {
        this.locked = true;
        this.started = false;
        this.distance = 0;
    }
    Helicopter.prototype.open = function () {
        if (this.locked) {
            this.locked = false;
        }
    };
    ;
    Helicopter.prototype.close = function () {
        if (!this.locked) {
            this.locked = true;
        }
    };
    ;
    Helicopter.prototype.start = function () {
        if (!this.started) {
            this.started = true;
        }
    };
    ;
    Helicopter.prototype.stop = function () {
        if (this.started) {
            this.started = false;
        }
    };
    ;
    Helicopter.prototype.go = function (distance) {
        this.distance += distance;
        console.log("Thump Thump Thump Thump Thump Thump Thump Thump Thump Thump Thump Thump");
        return this.distance;
    };
    return Helicopter;
}());
var myRide = new Helicopter();
var distance = myRide.go(10);
console.log("distance traveled: ", distance);
