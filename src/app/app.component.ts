import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
    var config = {
      apiKey: "AIzaSyBOSDcby9KoujreVEqzQG5U2hlD6lTkiEc",
    authDomain: "bookshelves-c4a95.firebaseapp.com",
    databaseURL: "https://bookshelves-c4a95.firebaseio.com",
    projectId: "bookshelves-c4a95",
    storageBucket: "bookshelves-c4a95.appspot.com",
    messagingSenderId: "963500976065"
    };
    firebase.initializeApp(config);
  }
}
