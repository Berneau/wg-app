import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';

import { TitleColorService } from '../_services/title-color.service';
import { getDates } from '../app.helpers';
import { Invoice } from '../_models/invoice.model';
import { InvoiceDialogComponent } from './dialog/invoice-dialog.component';
import { InvoiceService } from '../_api/invoice.service';
import { NotificationService } from '../_services/notification.service';
import { SummaryDialogComponent } from './summary/summary-dialog.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  invoices: Invoice[];
  months: any[];
  years: number[];
  selectedYear: number;
  selectedMonth: number;
  selectedSort: string = 'date';

  constructor(
    private titleColorService: TitleColorService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private invoiceService: InvoiceService,
    private handle: NotificationService,
  ) { }

  ngOnInit() {
    this.calculateDate();
    this.fetchInvoices();
    this.titleColorService.change('purple');
  }

  ngOnDestroy() {
    this.snackbar.dismiss();
  }

  fetchInvoices() {
    this.invoiceService.readAll(this.selectedMonth).subscribe(
      (result) => {
        this.invoices = result;
        console.log('invoices', this.invoices);
      },
      (error) => { this.handle.openSnackbar('Can\'t load invoices', error); }
    )
  }

  calculateDate() {
    let dates = getDates();

    this.months = dates.months.reverse();
    this.years = dates.years;
    this.selectedYear = dates.currentYear;
    this.selectedMonth = dates.currentMonth;
  }

  onDateChange() {
    this.fetchInvoices();
  }

  openDialog() {
    this.dialog.open(InvoiceDialogComponent, {
      data: {
        selectedMonth: this.selectedMonth
      }
    })
    .afterClosed()
    .subscribe((data) => {
      if (data) this.fetchInvoices();
    })
  }

  openSummary() {
    let m = this.getMonthById();

    this.dialog.open(SummaryDialogComponent, {
      width: '400px',
      data: {
        month: this.selectedMonth,
        monthAsText: m.name
      }
    });
  }

  getMonthById() {
    for (let i = 0; i < this.months.length; i++) {
      if (this.months[i].id === this.selectedMonth) return this.months[i];
    }
    return {};
  }

  deleteInvoice(e) {
    this.invoiceService.delete(e.invoice, e.shouldDelete).subscribe(
      (result) => {
        this.fetchInvoices();

        if (e.shouldDelete) {
          this.snackbar.open('Invoice deleted', 'Undo', {
            duration: 5000
          })
          .onAction()
          .subscribe(() => {
            this.deleteInvoice({ invoice: e.invoice, shouldDelete: false });
            this.fetchInvoices();
          })
        } else {
          this.handle.openSnackbar('Invoice restored');
          this.fetchInvoices();
        }
      },
      (error) => { this.handle.openSnackbar('Can\'t delete invoice'); }
    )
  }
}
