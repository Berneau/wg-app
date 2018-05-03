import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import { AuthService } from '../_api/auth.service';
import { Store } from '../app.store';
// import { NotificationService } from '../_services/notification.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store,
    // private handle: NotificationService
    // private authService: AuthService
  ) { }

  canActivate(): Observable<boolean> {

    this.store.initLS();

    let token = this.store.readFromConfig('jwttoken');

    // no token found

    if (!token) {
      this.router.navigate(['/logout']);
      return Observable.of(false);
    }

    return Observable.of(true);

    // // token is not expired
    // if (isTokenValid(tokens)) return Observable.of(true);
    //
    // if (!tokens.refreshtoken) return Observable.of(false);
    //
    // this.handle.log('Attempting to refresh token.');
    //
    // // token is expired -> get new token with refreshtoken
    // return this.authService.refreshToken(tokens.refreshtoken)
    // .map((response: any) => {
    //   if (isTokenValid(response)) {
    //     this.store.saveToConfig('jwttoken', response, true);
    //     return true;
    //   }
    //   this.handle.openSnackbar('Sitzung ist abgelaufen.', response);
    //   this.router.navigate(['/logout']);
    //   return false;
    // })
    // .catch((error) => {
    //   this.handle.openSnackbar('Fehler beim Aktualisieren des Tokens.', error);
    //   this.router.navigate(['/logout']);
    //   return Observable.of(false);
    // })
  }
}
