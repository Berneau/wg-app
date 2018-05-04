import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  readAll(): Observable<User[]> {

    return this.http.get(`users`)
    .map((response: any) => {
      return response.users;
    })
  }

  // read(invoice: Invoice): Observable<Invoice> {
  //
  //   return this.http.get(`invoices/${invoice._id}`)
  //   .map((response: any) => {
  //     return response.invoice;
  //   })
  // }
  //
  // create(invoice: Invoice): Observable<Invoice> {
  //
  //   return this.http.post(`invoices`, invoice)
  //   .map((response: any) => {
  //     return response.invoice;
  //   })
  // }
  //
  // update(invoice: Invoice): Observable<Invoice> {
  //
  //   return this.http.put(`invoices/${invoice._id}`, invoice)
  //   .map((response: any) => {
  //     return response.invoice;
  //   })
  // }
  //
  // delete(invoice: Invoice, shouldDelete: boolean): Observable<Invoice> {
  //
  //   return this.http.delete(`invoices/${invoice._id}?shouldDelete=${shouldDelete}`)
  //   .map((response: any) => {
  //     return response.invoice;
  //   })
  // }
}
