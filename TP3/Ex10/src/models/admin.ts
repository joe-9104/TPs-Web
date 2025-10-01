import { Person } from "./person";

export class Admin extends Person {
    constructor (id: number, name: string) {
        super(id, name, 'Admin');
    }
    getInfo(): string {
        return `Admin ID: ${this.id}, Name: ${this.name}\n`;
    }
}