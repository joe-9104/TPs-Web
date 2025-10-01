import { Person } from "./person";

export class User extends Person {
    constructor (id: number, name: string) {
        super(id, name, 'User');
    }
    getInfo(): string {
        return `User ID: ${this.id}, Name: ${this.name}\n`;
    }
}