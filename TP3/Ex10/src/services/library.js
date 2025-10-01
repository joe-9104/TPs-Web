"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var repository_1 = require("../utils/repository");
// classe principale qui gère livres, utilisateurs et emprunts.
var Library = /** @class */ (function () {
    function Library(initialBooks) {
        if (initialBooks === void 0) { initialBooks = []; }
        // map bookId -> userId
        this.borrowedMap = new Map();
        this.bookRepo = new repository_1.Repository(initialBooks);
    }
    // --- CRUD livres ---
    Library.prototype.addBook = function (book) {
        this.bookRepo.add(book);
    };
    Library.prototype.removeBook = function (bookId) {
        // si le livre est emprunté, on refuse la suppression
        if (this.borrowedMap.has(bookId)) {
            throw new Error("Cannot remove a borrowed book");
        }
        return this.bookRepo.delete(bookId);
    };
    Library.prototype.updateBook = function (book) {
        this.bookRepo.update(book);
    };
    Library.prototype.getAllBooks = function () {
        return this.bookRepo.getAll();
    };
    Library.prototype.getBookById = function (id) {
        return this.bookRepo.getById(id);
    };
    // --- Recherche ---
    Library.prototype.searchByTitle = function (query) {
        var q = query.trim().toLowerCase();
        return this.bookRepo.find(function (b) { return b.title.toLowerCase().includes(q); });
    };
    Library.prototype.searchByAuthor = function (query) {
        var q = query.trim().toLowerCase();
        return this.bookRepo.find(function (b) { return b.author.toLowerCase().includes(q); });
    };
    // --- Emprunter / Rendre ---
    Library.prototype.borrowBook = function (bookId, person) {
        var book = this.bookRepo.getById(bookId);
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
    };
    Library.prototype.returnBook = function (bookId, person) {
        var book = this.bookRepo.getById(bookId);
        if (!book)
            throw new Error("Book not found");
        var borrowerId = this.borrowedMap.get(bookId);
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
    };
    Library.prototype.whoBorrowed = function (bookId) {
        return this.borrowedMap.get(bookId);
    };
    return Library;
}());
exports.Library = Library;
