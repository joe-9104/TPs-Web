import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgForOf],
  templateUrl: './book-form.html',
  styleUrl: './book-form.scss'
})
export class BookForm implements OnChanges {
  @Input() categories: string[] = [];
  @Input() editBook: Book | null = null; // si non null -> mode édition
  @Output() create = new EventEmitter<Book>();
  @Output() update = new EventEmitter<Book>();
  @Output() cancel = new EventEmitter<void>();

  model: Book = this.emptyBook();
  isEdit = false;
  releaseYearInvalid = false;

  voidBook: Book = {
    author: '',
    category: '',
    id: 0,
    isAvailable: false,
    publisherEmail: '',
    releaseDate: '',
    title: ''
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editBook'] && this.editBook) {
      this.model = { ...this.editBook };
      this.isEdit = true;
      this.checkYear();
    }
    if (changes['editBook'] && this.editBook === null) {
      this.isEdit = false;
      this.model = this.emptyBook();
      this.releaseYearInvalid = false;
    }
  }

  emptyBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: undefined,
      releaseDate: '',
      category: '',
      isAvailable: false,
      stock: undefined,
    };
  }

  checkYear() {
    if (!this.model.releaseDate) {
      this.releaseYearInvalid = false;
      return;
    }
    const year = new Date(this.model.releaseDate).getFullYear();
    this.releaseYearInvalid = !(year > 1900);
  }

  onSubmit(form: NgForm) {
    if (this.isEdit) {
      this.update.emit({ ...this.model });
    } else {
      this.create.emit({ ...this.model });
    }
    this.reset(form);
  }

  reset(form?: NgForm) {
    form?.resetForm();
    this.model = this.emptyBook();
    this.isEdit = false;
    this.releaseYearInvalid = false;
    this.cancel.emit();
  }
}
