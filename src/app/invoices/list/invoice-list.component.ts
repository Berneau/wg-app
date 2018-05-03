import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Invoice } from '../../_models/invoice.model';

@Component({
  selector: 'invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  @Input() invoices: Invoice[];
  @Output() onDeleteInvoice = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteInvoice(e) {
    this.onDeleteInvoice.emit(e);
  }

}
