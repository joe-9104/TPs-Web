export class Repository<T extends { id: number }> { //s'assurer que T a toujours une propriete id
    private items: T[] = [];

    constructor(initialItems: T[] = []) {
        this.items = [...initialItems];
    }

    getAll(): T[] {
        return [...this.items];
    }

    getById(id: number): T | undefined {
        return this.items.find((item) => item.id === id)
    }

    add(item: T) {
        if (this.getById(item.id)) {
            throw new Error(`Item with id ${item.id} already exists.`);
        }
        this.items.push(item);
    }

    update(item: T){
        const index = this.items.findIndex((i) => i.id === item.id);
        if (index === -1) {
            throw new Error(`Item with id ${item.id} not found.`);
        }
        this.items[index] = item;
    }

    delete(id: number): boolean {
        const index = this.items.findIndex((i) => i.id === id);
        if (index === -1) {
            throw new Error(`Item with id ${id} not found.`);
        }
        this.items.splice(index, 1);
        return true;
    }

    find(predicate: (item: T) => boolean): T[] {
        return this.items.filter(predicate);
    }
}