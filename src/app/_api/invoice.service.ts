import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Invoice } from '../_models/invoice.model';

@Injectable()
export class InvoiceService {

  constructor(private http: HttpClient) { }

  readAll(month: number): Observable<Invoice[]> {

    return this.http.get(`invoices?month=${month}`)
    .map((response: any) => {
      return response.invoices;
    })
  }

  read(invoice: Invoice): Observable<Invoice> {

    return this.http.get(`invoices/${invoice._id}`)
    .map((response: any) => {
      return response.invoice;
    })
  }

  create(invoice: Invoice): Observable<Invoice> {

    return this.http.post(`invoices`, invoice)
    .map((response: any) => {
      return response.invoice;
    })
  }

  update(invoice: Invoice): Observable<Invoice> {

    return this.http.put(`invoices/${invoice._id}`, invoice)
    .map((response: any) => {
      return response.invoice;
    })
  }

  delete(invoice: Invoice, shouldDelete: boolean): Observable<Invoice> {

    return this.http.delete(`invoices/${invoice._id}?shouldDelete=${shouldDelete}`)
    .map((response: any) => {
      return response.invoice;
    })
  }

  getSummary(month: number): Observable<any> {

    return this.http.get(`operations/summary?month=${month}`)
    .map((response: any) => {
      return response.summary;
    })
  }
}
