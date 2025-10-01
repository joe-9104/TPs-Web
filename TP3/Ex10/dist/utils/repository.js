"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor(initialItems = []) {
        this.items = [];
        this.items = [...initialItems];
    }
    getAll() {
        return [...this.items];
    }
    getById(id) {
        return this.items.find((item) => item.id === id);
    }
    add(item) {
        if (this.getById(item.id)) {
            throw new Error(`Item with id ${item.id} already exists.`);
        }
        this.items.push(item);
    }
    update(item) {
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index === -1) {
            throw new Error(`Item with id ${item.id} not found.`);
        }
        this.items[index] = item;
    }
    delete(id) {
        const index = this.items.findIndex((i) => i.id === id);
        if (index === -1) {
            throw new Error(`Item with id ${id} not found.`);
        }
        this.items.splice(index, 1);
        return true;
    }
    find(predicate) {
        return this.items.filter(predicate);
    }
}
exports.Repository = Repository;
