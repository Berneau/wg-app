import { Router } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// import { AuthService } from './services/auth.service';
import { Store } from '../app.store';
import { apiUrl } from './api.config';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  // authService: AuthService;
  // router: Router;
  store: Store;

  // refreshTokenInProgress = false;
  // tokenRefreshedSource = new Subject();
  // tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(
    private injector: Injector
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // this.authService = this.injector.get(AuthService);
    // this.router = this.injector.get(Router);
    this.store = this.injector.get(Store);

    // set accesstoken if available
    let token = this.store.readFromConfig('jwttoken');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', token) });
    }

    // prefix url
    let url = request.url;
    request = request.clone({ url: `${apiUrl}/${url}` });

    // set empty body object if null
    if (!request.body) {
      request = request.clone({ body: {} });
    }

    // set contenttype if not set
    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    // set accept headers
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request);
      // .catch(
      //   (error) => {
      //     if (error.status === 401) {
      //
      //       let refreshToken;
      //       let tokens = this.store.readFromConfig('jwttoken');
      //
      //       if (tokens) refreshToken = tokens.refreshtoken;
      //       else {
      //         this.handle.openSnackbar('Fehler beim einloggen.', error);
      //         this.router.navigate(['/logout'])
      //         return Observable.empty();
      //       }
      //
      //       return this.refreshToken(refreshToken)
      //       .switchMap(() => {
      //         request = this.addAuthHeader(request);
      //         return next.handle(request);
      //       })
      //       .catch((error) => {
      //         this.handle.openSnackbar('Fehler beim Erneuern der Sitzung', error),
      //         this.router.navigate(['/logout'])
      //         return Observable.empty();
      //       });
      //     }
      //
      //   return Observable.throw(error);
      //   });
  }

  // addAuthHeader(request: HttpRequest<any>) {
  //   let tokens = this.store.readFromConfig('jwttoken');
  //   return request.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${tokens.accesstoken}`
  //     }
  //   });
  // }

  // refreshToken(refreshToken: string) {
  //   if (this.refreshTokenInProgress) {
  //     return new Observable(observer => {
  //       this.tokenRefreshed$.subscribe(() => {
  //           observer.next();
  //           observer.complete();
  //       });
  //     });
  //   } else {
  //     this.refreshTokenInProgress = true;
  //     return this.authService.refreshToken(refreshToken)
  //       .do((response) => {
  //         this.store.saveToConfig('jwttoken', response);
  //         this.refreshTokenInProgress = false;
  //         this.tokenRefreshedSource.next();
  //       })
  //       .catch((error) => {
  //         this.handle.openSnackbar('Fehler beim Erneuern der Sitzung', error),
  //         this.router.navigate(['/logout'])
  //         return Observable.empty();
  //       });
  //   }
  // }
}
