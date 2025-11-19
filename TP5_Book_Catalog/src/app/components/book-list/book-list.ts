import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table *ngIf="books && books.length > 0" class="book-table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Catégorie</th>
          <th>Disponible</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let book of books; trackBy: trackById">
          <td>{{book.title}}</td>
          <td>{{book.author}}</td>
          <td>{{book.category}}</td>
          <td>{{book.isAvailable ? 'Oui' : 'Non'}}</td>
          <td class="actions">
            <button class="edit-btn" (click)="onEdit(book)">Modifier</button>
            <button class="delete-btn" (click)="onDelete(book.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div *ngIf="!books || books.length === 0" class="empty-state">
      Aucun livre.
    </div>
  `,
  styles: [`
    .book-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
      border-radius: 6px;
      overflow: hidden;
    }

    th, td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid #eee;
    }

    thead {
      background-color: #3498db;
      color: #fff;
      font-weight: 600;
    }

    tbody tr {
      transition: background-color 0.2s;
    }

    tbody tr:hover {
      background-color: #f2f8ff;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }

    button {
      padding: 0.35rem 0.6rem;
      border: none;
      border-radius: 4px;
      font-size: 0.85rem;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.2s;
    }

    .edit-btn {
      background-color: #2ecc71;
      color: #fff;
    }

    .edit-btn:hover {
      background-color: #27ae60;
    }

    .delete-btn {
      background-color: #e74c3c;
      color: #fff;
    }

    .delete-btn:hover {
      background-color: #c0392b;
    }

    .empty-state {
      text-align: center;
      color: #7f8c8d;
      font-size: 1rem;
      margin-top: 1rem;
    }

    @media (max-width: 640px) {
      th, td {
        padding: 0.5rem;
        font-size: 0.85rem;
      }

      .actions {
        flex-direction: column;
        gap: 0.25rem;
      }
    }
  `]
})
export class BookList {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();

  trackById(index: number, item: Book) {
    return item.id;
  }

  onEdit(book: Book) {
    this.edit.emit(book);
  }

  onDelete(id: number | undefined) {
    if (id != null) this.delete.emit(id);
  }
}
