import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BooksServiceProvider, Book } from '../../providers/books-service/books-service';
import 'rxjs/add/operator/debounceTime';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  searchTerm: string = '';
  searching: boolean;
  books: Book[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    private bookService: BooksServiceProvider) {
    this.books = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }

  onCancel(event: any) {
    console.log('onCancel BooksPage');
    this.books = [];
  }

  onClear(event: any) {
    console.log('onClear BooksPage');
    this.books = [];
  }

  onInput(event: any) {
    console.log('onInput BooksPage :: this.searchTerm : ' + this.searchTerm);
    if (this.searchTerm.trim().length > 0) {
      this.searching = true;
      this.bookService.search(this.searchTerm)
      .debounceTime(5000) // solo per i test
      .subscribe(books => {
        this.books = books;
        this.searching = false;
      });
    } else {
      this.books = [];
    }
  }

  reserveBook(bookId: number) {
    console.log("reserveBook BooksPage :: bookId : " + bookId);
    this.bookService.reserveBook(bookId)
    .subscribe((book) => {
      let alert = this.alertCtrl.create({
        title: 'Libro prenotato!',
        subTitle: 'Hai prenotato con successo il libro "' + book.title + '"!',
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
