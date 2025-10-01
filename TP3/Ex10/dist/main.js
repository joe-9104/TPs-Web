"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./services/api");
const library_1 = require("./services/library");
const user_1 = require("./models/user");
const admin_1 = require("./models/admin");
async function demo() {
    var _a, _b;
    console.log("Démarrage demo bibliothèque...");
    // 1) Récupérer livres depuis API
    const books = await (0, api_1.fetchBooksFromAPI)();
    console.log("Livres récupérés depuis l'API :", books);
    // 2) Initialiser Library avec ces livres
    const lib = new library_1.Library(books);
    // 3) Créer des personnes
    const alice = new user_1.User(101, "Alice");
    const bob = new user_1.User(102, "Bob");
    const admin = new admin_1.Admin(1, "Librarian");
    console.log(alice.getInfo(), bob.getInfo(), admin.getInfo());
    // 4) Emprunter un livre
    const bookIdToBorrow = 1;
    const ok1 = lib.borrowBook(bookIdToBorrow, alice);
    console.log(`Alice emprunte le livre ${bookIdToBorrow}:`, ok1 ? "OK" : "Échec");
    // 5) Essayer d'emprunter le même livre (doit échouer)
    const ok2 = lib.borrowBook(bookIdToBorrow, bob);
    console.log(`Bob emprunte le même livre ${bookIdToBorrow}:`, ok2 ? "OK" : "Échec (déjà emprunté)`");
    // 6) Vérifier disponibilité
    console.log("Livre 1 disponible ?", (_a = lib.getBookById(1)) === null || _a === void 0 ? void 0 : _a.available);
    console.log("Qui a emprunté le livre 1 ? (userId)", lib.whoBorrowed(1));
    // 7) Retourner le livre
    const ret = lib.returnBook(bookIdToBorrow, alice);
    console.log(`Alice rend le livre ${bookIdToBorrow}:`, ret ? "OK" : "Échec");
    console.log("Livre 1 disponible après retour ?", (_b = lib.getBookById(1)) === null || _b === void 0 ? void 0 : _b.available);
    // 8) Rechercher par titre
    console.log("Recherche 'code' :", lib.searchByTitle("Code"));
    // 9) Ajouter et supprimer un livre (admin)
    const newBook = { id: 999, title: "TypeScript Deep Dive", author: "B. O. R.", year: 2020, available: true };
    lib.addBook(newBook);
    console.log("After add, total books:", lib.getAllBooks().length);
    const removed = lib.removeBook(999);
    console.log("Suppression du livre 999 :", removed ? "OK" : "Échec");
    console.log("Demo terminée.");
}
demo().catch(err => console.error(err));
