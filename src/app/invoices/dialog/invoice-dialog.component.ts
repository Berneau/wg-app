import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { getDates } from '../../app.helpers';
import { DecimalPipe } from '../../_pipes/decimal.pipe';
import { Invoice } from '../../_models/invoice.model';
import { InvoiceService } from '../../_api/invoice.service';
import { Store } from '../../app.store';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {
  currentUser;
  months: any[];
  years: number[];
  days: number[];
  currentDay: number;
  currentMonth: number;
  currentYear: number;
  amountOriginal: number = 0;
  amountPrivate: number = 0;
  amountToSplit: number = 0;

  constructor(
    public dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private store: Store,
    private handle: NotificationService
  ) { }

  ngOnInit() {
    this.calculateDate();

    this.currentUser = this.store.readFromConfig('currentUser');
  }

  calculateDate() {
    let dates = getDates();
    let dayAmount = dates.months[dates.currentMonth].days;

    this.months = dates.months.reverse();
    this.years = dates.years;
    this.days = this.getDayArrayByAmount(dayAmount);
    this.currentDay = dates.currentDay;
    this.currentMonth = dates.currentMonth;
    this.currentYear = dates.currentYear;
  }

  getDayArrayByAmount(amount: number) {
    let days = [];
    for (let i = 0; i < amount; i++) {
      days.push(i + 1)
    }
    return days;
  }

  onBlur(e, selector: string) {
    let val = e.target.value;
    if (!val) val = 0;
    else val = parseFloat(val);

    if (selector == 'private') this.amountPrivate = val;
    if (selector == 'original') this.amountOriginal = val;

    if (this.amountOriginal <= 0) return;
    this.amountToSplit = this.amountOriginal - this.amountPrivate;
  }

  onSave() {

    let invoice = {
      ownerId: this.currentUser._id,
      amountOriginal: this.amountOriginal,
      amountPrivate: this.amountPrivate,
      amountToSplit: this.amountToSplit,
      month: this.currentMonth,
      year: this.currentYear,
      date: new Date(this.currentYear, this.currentMonth, this.currentDay)
    }

    this.invoiceService.create(invoice).subscribe(
      (response) => {
        if (this.invoiceIsVisible(invoice)) {
          this.dialogRef.close(true);
          this.handle.openSnackbar('Invoice Saved');
        } else {
          this.dialogRef.close(false);
          this.handle.openSnackbar('Invoice Saved, but currently not visible');
        }
      },
      (error) => { this.handle.openSnackbar('Can\'t save invoice', error); }
    )
  }

  invoiceIsVisible(invoice: Invoice): boolean {
    return this.data.selectedMonth === invoice.month;
  }
}
