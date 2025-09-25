//ex1
console.log("Hello TypeScript")

//ex2
let nom : string = "Youssef"
let age : number = 21
let isAdmin : boolean = true
let scores : number[] = [1, 2, 3]
const tuple : [string, number] = ["Bob", 25]
enum Role {
    User,
    Admin,
    SuperAdmin
}
const r = Role.Admin

//ex3
let id : number | string
type A = {
    a: string,
    b: number
}
type B = {
    c: boolean
}
type C = A & B

let statut : "pending" | "done" | "canceled"

let variable : unknown
//type assertion ??

//ex4
interface User {
    id: number,
    name: string,
    email?: string,
    readonly isAdmin: boolean
}

const utilisateur: User = {
    id : 1,
    name: "Youssef",
    isAdmin : true
}

interface Admin extends User {
    permissions: string[]
}

//ex5
function add(a: number, b: number): number {
    return a + b
}
console.log(add(3, 5));

function greet(name: string, age?: number) {
    if(age) return `Hello ${name}, your age is ${age}`
    else return `Hello ${name}`
}
console.log(greet("Bob", 21))
console.log(greet("Alice"))
function power(base: number, exp: number = 2){
    return base**exp;
}
console.log(power(2))
console.log(power(2, 3))

function concat(a: string, b: string): string;
function concat(a: number, b: number): number;
function concat(a: string | number, b: string | number): any {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Types incompatibles !");
}
console.log(concat("Hello, ", "world!"));
console.log(concat(5, 10));