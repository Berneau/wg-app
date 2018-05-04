import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Invoice } from '../../_models/invoice.model';

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {
  @Input() invoices: Invoice[];
  @Output() onDeleteInvoice = new EventEmitter();

  constructor() { }

  deleteInvoice(e) {
    this.onDeleteInvoice.emit(e);
  }
}
