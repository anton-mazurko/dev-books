import {Component} from '@angular/core';
import {IBook} from '../book';
import {BookService} from '../book.service';

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent {

  books: IBook[];
  favoriteMessage: string = "";
  imageWidth: number = 100;
  showImage: boolean = true;
  public booksInStock: number = 2;

  constructor(private _bookService: BookService){
    this.books = _bookService.getBooks();
  }

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}