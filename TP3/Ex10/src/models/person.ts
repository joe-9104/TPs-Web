export type Role = 'Admin' | 'User'

export abstract class Person {
    constructor(
        public readonly id: number,
        public name: string,
        public role: Role,
    ) {}

    abstract getInfo(): string;
}