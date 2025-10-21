interface Vehicle {
    locked: boolean;
    started: boolean;
    distance: number;

    open(): void
    close(): void
    start(): void
    stop(): void
    go(distance: number): number
}

class GasCar implements Vehicle {
    locked = true;
    started = false;
    distance = 0;

    open(){
        if(this.locked) {
            this.locked = false;
        }
    };
    close(){
        if(!this.locked) {
            this.locked = true;
        }
    };
    start(){
        if(!this.started){
            this.started = true;
        }
    };
    stop(){
        if(this.started) {
            this.started = false;
        }
    };
    go(distance: number){
        this.distance += distance;
        console.log("Vroom Vroom!")
        return this.distance;
    }
}


class Helicopter implements Vehicle {
    locked = true;
    started = false;
    distance = 0;

    open(){
        if(this.locked) {
            this.locked = false;
        }
    };
    close(){
        if(!this.locked) {
            this.locked = true;
        }
    };
    start(){
        if(!this.started){
            this.started = true;
        }
    };
    stop(){
        if(this.started) {
            this.started = false;
        }
    };
    go(distance: number){
        this.distance += distance;
        console.log("Thump Thump Thump Thump Thump Thump Thump Thump Thump Thump Thump Thump")
        return this.distance;
    }

    land(): void {
        console.log("Thump Thump      Thump              Thump                    Bump.")
    }
}

let myRide: Vehicle = new Helicopter();
let myHelicopter = myRide as Helicopter
(myRide as Helicopter).land()
myHelicopter.land()
let distance: number = myRide.go(10)
console.log("distance traveled: ", distance)




let myNewThing: Helicopter | GasCar = new Helicopter();
(myNewThing as Helicopter).land()


let x: number | string | boolean | Object | Function | any | undefined;
x = "one"
x = 1



interface Name {
  name: string
};

interface Age {
  age: number
};

type Person = Name | Age;

let myGuy: Person = {
    name: "Kyle",
    age: 40
}

type ConnectionData = {
    url: string,
    open: Function,
    close: Function
}



async function connect(connectionData: ConnectionData): void {
    let resp = await fetch(connectionData.url)
}