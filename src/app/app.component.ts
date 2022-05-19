import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'id-card';

  constructor(private router: Router,) {

  }

  gotoCardList() {
    this.router.navigate(['/cards']);
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
