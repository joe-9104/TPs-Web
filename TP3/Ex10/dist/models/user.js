"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const person_1 = require("./person");
class User extends person_1.Person {
    constructor(id, name) {
        super(id, name, 'User');
    }
    getInfo() {
        return `User ID: ${this.id}, Name: ${this.name}\n`;
    }
}
exports.User = User;
