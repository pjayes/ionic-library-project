import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WatchListServiceProvider } from '../../providers/watch-list-service/watch-list-service';
import { Book } from '../../providers/books-service/books-service';

/**
 * Generated class for the WatchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watch-list',
  templateUrl: 'watch-list.html',
})
export class WatchListPage {

  books: Book[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private watchListService: WatchListServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchListPage');
    this.watchListService.fetchWatchList().subscribe(books => {
      this.books = books;
    });
  }

}
