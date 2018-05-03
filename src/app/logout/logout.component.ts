import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '../app.store';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.store.clearConfig();
    this.router.navigate(['/login']);
  }
}
