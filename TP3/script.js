//ex1
console.log("Hello TypeScript");
//ex2
var nom = "Youssef";
var age = 21;
var isAdmin = true;
var scores = [1, 2, 3];
var tuple = ["Bob", 25];
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
var r = Role.Admin;
//ex3
var id;
var statut;
var variable;
var utilisateur = {
    id: 1,
    name: "Youssef",
    isAdmin: true
};
//ex5
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
function greet(name, age) {
    if (age)
        return "Hello ".concat(name, ", your age is ").concat(age);
    else
        return "Hello ".concat(name);
}
console.log(greet("Bob", 21));
console.log(greet("Alice"));
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    return Math.pow(base, exp);
}
console.log(power(2));
console.log(power(2, 3));
function concat(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Types incompatibles !");
}
console.log(concat("Hello, ", "world!"));
console.log(concat(5, 10));
