import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { environment } from '../../environments/environment';

@Injectable()
export class NotificationService {

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openDialog(data, width = '400px') {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: width,
      data: {
        title: data.title,
        text: data.text,
        confirm: data.confirm,
        abort: data.abort
      },
      disableClose: data.close ? true : false,
      autoFocus: false
    });
    return dialogRef.afterClosed();
  }

  openSnackbar(msg: string, err = null, action: string = null) {
    if (action) action = action.toUpperCase();
    if (!environment.production && err) console.log(err);

    if (msg) {
      this.snackBar.open(msg, action, {
        duration: action ? null : 2000
      })
    }
  }

  log(msg: any, obj: any = null) {
    if (!environment.production) {
      if (obj) console.log(msg, obj);
      else console.log(msg);
    }
  }
}
