import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user): Observable<any> {

    return this.http.post(`auth`, user)
    .map((response: any) => {
      return response;
    })
  }


}
