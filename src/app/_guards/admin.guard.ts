import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '../app.store';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store
  ) { }

  canActivate(): Observable<boolean> {

    let currentUser = this.store.readFromConfig('currentUser');

    // not an admin

    if (!currentUser.isAdmin) {
      this.router.navigate(['/logout']);
      return Observable.of(false);
    }

    return Observable.of(true);
  }
}
