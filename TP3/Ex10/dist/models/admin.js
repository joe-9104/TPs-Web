"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const person_1 = require("./person");
class Admin extends person_1.Person {
    constructor(id, name) {
        super(id, name, 'Admin');
    }
    getInfo() {
        return `Admin ID: ${this.id}, Name: ${this.name}\n`;
    }
}
exports.Admin = Admin;
