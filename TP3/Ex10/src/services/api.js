"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBooksFromAPI = fetchBooksFromAPI;
function fetchBooksFromAPI() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve([
                { id: 1, title: "1984", author: "George Orwell", year: 1949, available: true },
                { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, available: false },
                { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, available: true },
            ]);
        }, 1000);
    });
}
