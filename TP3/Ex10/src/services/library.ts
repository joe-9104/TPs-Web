import { Book } from "../models/book";
import { Repository } from "../utils/repository";
import { Person } from "../models/person";


// classe principale qui gère livres, utilisateurs et emprunts.
export class Library {
  private bookRepo: Repository<Book>;
  // map bookId -> userId
  private borrowedMap: Map<number, number> = new Map();

  constructor(initialBooks: Book[] = []) {
    this.bookRepo = new Repository<Book>(initialBooks);
  }

  // --- CRUD livres ---
  addBook(book: Book): void {
    this.bookRepo.add(book);
  }

  removeBook(bookId: number): boolean {
    // si le livre est emprunté, on refuse la suppression
    if (this.borrowedMap.has(bookId)) {
      throw new Error("Cannot remove a borrowed book");
    }
    return this.bookRepo.delete(bookId);
  }

  updateBook(book: Book): void {
    this.bookRepo.update(book);
  }

  getAllBooks(): Book[] {
    return this.bookRepo.getAll();
  }

  getBookById(id: number): Book | undefined {
    return this.bookRepo.getById(id);
  }

  // --- Recherche ---
  searchByTitle(query: string): Book[] {
    const q = query.trim().toLowerCase();
    return this.bookRepo.find(b => b.title.toLowerCase().includes(q));
  }

  searchByAuthor(query: string): Book[] {
    const q = query.trim().toLowerCase();
    return this.bookRepo.find(b => b.author.toLowerCase().includes(q));
  }

  // --- Emprunter / Rendre ---
  borrowBook(bookId: number, person: Person): boolean {
    const book = this.bookRepo.getById(bookId);
    if (!book) throw new Error("Book not found");
    if (!book.available) {
      return false; // déjà emprunté
    }
    if(person.role === 'User') {
        book.available = false;
        this.bookRepo.update(book);
        this.borrowedMap.set(bookId, person.id);
        return true;
    }else{
        throw new Error("Admins can't borrow books");
    }
  }

  returnBook(bookId: number, person: Person): boolean {
    const book = this.bookRepo.getById(bookId);
    if (!book) throw new Error("Book not found");
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

  whoBorrowed(bookId: number): number | undefined {
    return this.borrowedMap.get(bookId);
  }
}
