import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
import { BooksPage } from '../books/books';
import { ReservationsPage } from '../reservations/reservations';
import { NotificationsPage } from '../notifications/notifications';
import { WatchListPage } from '../watch-list/watch-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  books = BooksPage;
  reservations = ReservationsPage;
  notifications = NotificationsPage;
  watchList = WatchListPage;

  constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    });
  }
}
