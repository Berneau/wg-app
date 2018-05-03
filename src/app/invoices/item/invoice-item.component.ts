import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Invoice } from '../../_models/invoice.model';
import { DecimalPipe } from '../../_pipes/decimal.pipe';

@Component({
  selector: 'invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {
  @Input() invoice: Invoice;
  @Input() index: number;
  @Output() onDeleteInvoice = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  delete(invoice, shouldDelete) {
    this.onDeleteInvoice.emit({ invoice, shouldDelete });
  }

}
