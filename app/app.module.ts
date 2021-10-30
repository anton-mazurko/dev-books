import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BooksListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }