import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksServiceProvider, Reservation } from '../../providers/books-service/books-service';

/**
 * Generated class for the ReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservations',
  templateUrl: 'reservations.html',
})
export class ReservationsPage {

  reservations: Reservation[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private bookService: BooksServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationsPage');
    this.bookService.fetchReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }



}
