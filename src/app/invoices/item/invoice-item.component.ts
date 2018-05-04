import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Invoice } from '../../_models/invoice.model';

@Component({
  selector: 'invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent {
  @Input() invoice: Invoice;
  @Input() index: number;
  @Output() onDeleteInvoice = new EventEmitter();

  constructor() { }

  delete(invoice, shouldDelete) {
    this.onDeleteInvoice.emit({ invoice, shouldDelete });
  }

}
