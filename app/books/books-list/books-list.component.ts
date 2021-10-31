import {Component} from '@angular/core';
// import {IBook} from '../book';

interface IBook {
  bookAuthor: string,
  bookTitle: string,
  bookPrice: number,
  bookDescription: string,
  publishedOn: Date,
  inStock: string,
  bookReviews: number,
  bookImageUrl: string,
  hardcover?: boolean
}

@Component({
  moduleId: module.id,
  selector: 'bs-books-list',
  templateUrl: 'books-list.component.html'
})

export class BooksListComponent {

  favoriteMessage: string = "";
  imageWidth: number = 100;
  showImage: boolean = true;
  booksInStock: number = 2;

  books: IBook[] = [{
    bookAuthor: "Tom Jones",
    bookTitle: "War and Peace2",
    bookPrice: 29.95,
    bookDescription: "Book of historical fiction",
    publishedOn: new Date('02/11/1921'),
    inStock: "yes",
    bookReviews: 15,
    bookImageUrl: "app/assets/images/656.jpg",
    hardcover: false
  }, {
    bookAuthor: "Mike Jones",
    bookTitle: "War and Peace3",
    bookPrice: 19.95,
    bookDescription: "Book of historical fiction",
    publishedOn: new Date('02/11/1921'),
    inStock: "yes",
    bookReviews: 18,
    bookImageUrl: "app/assets/images/656.jpg",
    hardcover: false
  }]

  onFavoriteClicked(message: string): void {
    this.favoriteMessage = message;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}