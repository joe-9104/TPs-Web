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

//ex6
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, je suis ${this.name} et j'ai ${this.age} ans.`);
    }
}

class Student extends Person {
    school: string;
    constructor(name: string, age: number, school: string) {
        super(name, age);
        this.school = school;
    }
}

abstract class Shape {
    abstract area(): number;
}
class Circle extends Shape {
    radius: number
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    area(): number {
        return Math.PI * this.radius ** 2
    }
}
class Rectangle extends Shape {
    width: number
    height: number
    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    area(): number {
        return this.width * this.height
    }  
}

//ex7
function identity<T>(arg: T): T {
    return arg;
}

function getFirst<T>(arr: T[]): T {
    return arr[0]!;
}

class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }
    getAll(): T[] {
        return this.items;
    }
    remove(item: T): void {
        this.items = this.items.filter(i => i !== item);
    }
}

interface ApiResponse<T> {
    data: T;
    error: string;
}

//ex8
import { somme } from "./math.js"
console.log(somme(10, 20));

import { soustraction, multiplication } from "./index.js"
console.log(soustraction(30, 15));
console.log(multiplication(4, 5));

import type { Operation, CalculationResult } from "./types.js"

function calculate(a: number, b: number, operation: Operation): CalculationResult {
    let result: number = 0;
    switch (operation) {
        case 'add':
            result = somme(a, b);
            break;
        case 'subtract':
            result = soustraction(a, b);
            break;
    }
    return { operation, result };
}