var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["PowerUser"] = 1] = "PowerUser";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["SuperAdmin"] = 3] = "SuperAdmin";
    Role[Role["Owner"] = 4] = "Owner";
})(Role || (Role = {}));
// Access enum member values
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
var User = /** @class */ (function () {
    function User(role) {
        this._role = role;
    }
    return User;
}());
var kyle = new User(0);
