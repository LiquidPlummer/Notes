enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum Role {
    User = 0,
    PowerUser = 1,
    Admin = 2,
    SuperAdmin = 3,
    Owner = 4
}

// Access enum member values
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

class User {
    private _role: Role;

    constructor(role: Role) {
        this._role = role;
    }
}

let kyle = new User(0)





