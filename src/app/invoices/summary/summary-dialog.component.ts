import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Invoice } from '../../_models/invoice.model';
import { InvoiceService } from '../../_api/invoice.service';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-summary-dialog',
  templateUrl: './summary-dialog.component.html',
  styleUrls: ['./summary-dialog.component.scss']
})
export class SummaryDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private handle: NotificationService
  ) { }

  ngOnInit() {
    this.invoiceService.getSummary(this.data.month).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    )
  }
}
