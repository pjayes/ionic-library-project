import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../books-service/books-service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/*
  Generated class for the WatchListServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WatchListServiceProvider {

  private books: Book[];

  constructor(public http: HttpClient) {
    console.log('Hello WatchListServiceProvider Provider');

    this.books = [
      {
        id: 1,
        title: 'Shining', 
        summary: 'Shining (The Shining) è un romanzo thriller-horror di Stephen King. Edito nel 1977, rappresenta una delle tappe più importanti compiute dallo scrittore...',
        available: false,
        thumbnail: ''
      },
      {
        id: 2,
        title: 'It',
        summary: 'It è un romanzo horror scritto da Stephen King e pubblicato nel 1986. Considerato il capolavoro per eccellenza di King, It è una lunga e sinistra saga corale che si espande tra orrori inquietanti e drammi umani senza speranza...',
        available: true,
        thumbnail: 'assets/imgs/books/book_it.jpeg'
      },
      {
        id: 3,
        title: 'Misery',
        summary: 'Misery è un romanzo thriller scritto da Stephen King e pubblicato nel 1987, vincitore del Premio Bram Stoker...',
        available: true,
        thumbnail: 'assets/imgs/books/book_misery.jpeg'
      }
    ];
  }

  fetchWatchList(): Observable<Book[]>  {
    return Observable.of(
      this.books
    );
  }

}
