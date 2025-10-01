"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const repository_1 = require("../utils/repository");
// classe principale qui gère livres, utilisateurs et emprunts.
class Library {
    constructor(initialBooks = []) {
        // map bookId -> userId
        this.borrowedMap = new Map();
        this.bookRepo = new repository_1.Repository(initialBooks);
    }
    // --- CRUD livres ---
    addBook(book) {
        this.bookRepo.add(book);
    }
    removeBook(bookId) {
        // si le livre est emprunté, on refuse la suppression
        if (this.borrowedMap.has(bookId)) {
            throw new Error("Cannot remove a borrowed book");
        }
        return this.bookRepo.delete(bookId);
    }
    updateBook(book) {
        this.bookRepo.update(book);
    }
    getAllBooks() {
        return this.bookRepo.getAll();
    }
    getBookById(id) {
        return this.bookRepo.getById(id);
    }
    // --- Recherche ---
    searchByTitle(query) {
        const q = query.trim().toLowerCase();
        return this.bookRepo.find(b => b.title.toLowerCase().includes(q));
    }
    searchByAuthor(query) {
        const q = query.trim().toLowerCase();
        return this.bookRepo.find(b => b.author.toLowerCase().includes(q));
    }
    // --- Emprunter / Rendre ---
    borrowBook(bookId, person) {
        const book = this.bookRepo.getById(bookId);
        if (!book)
            throw new Error("Book not found");
        if (!book.available) {
            return false; // déjà emprunté
        }
        if (person.role === 'User') {
            book.available = false;
            this.bookRepo.update(book);
            this.borrowedMap.set(bookId, person.id);
            return true;
        }
        else {
            throw new Error("Admins can't borrow books");
        }
    }
    returnBook(bookId, person) {
        const book = this.bookRepo.getById(bookId);
        if (!book)
            throw new Error("Book not found");
        const borrowerId = this.borrowedMap.get(bookId);
        if (!borrowerId) {
            // livre n'était pas emprunté
            return false;
        }
        if (borrowerId !== person.id) {
            throw new Error("The same person must return the book who borrowed it");
        }
        book.available = true;
        this.bookRepo.update(book);
        this.borrowedMap.delete(bookId);
        return true;
    }
    whoBorrowed(bookId) {
        return this.borrowedMap.get(bookId);
    }
}
exports.Library = Library;
