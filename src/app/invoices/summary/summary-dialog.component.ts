import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Invoice } from '../../_models/invoice.model';
import { InvoiceService } from '../../_api/invoice.service';
import { UserService } from '../../_api/user.service';
import { User } from '../../_models/user.model';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-summary-dialog',
  templateUrl: './summary-dialog.component.html',
  styleUrls: ['./summary-dialog.component.scss']
})
export class SummaryDialogComponent implements OnInit {
  usersForPipe: User[];
  users: User[];
  splitSum: number;
  sum: number;


  constructor(
    public dialogRef: MatDialogRef<SummaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private handle: NotificationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.invoiceService.getSummary(this.data.month).subscribe(
      (response) => {
        this.users = response.users;
        this.sum = this.calculateSum(this.users);
        this.splitSum = this.sum / 3;
      },
      (error) => { this.handle.log('Can\'t load summary', error); }
    )

    this.userService.readAll().subscribe(
      (response) => { this.usersForPipe = response; },
      (error) => { this.handle.log('Can\'t load users', error); }
    )
  }

  calculateSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].sum;
    }

    return sum;
  }
}
