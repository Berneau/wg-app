import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatSelectModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatInputModule,
  MatDividerModule,
  MatSnackBarModule
} from '@angular/material';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceDialogComponent } from './invoices/dialog/invoice-dialog.component';
import { InvoiceListComponent } from './invoices/list/invoice-list.component';
import { InvoiceItemComponent } from './invoices/item/invoice-item.component';
import { TasksComponent } from './tasks/tasks.component';
import { TitleColorService } from './_services/title-color.service';
import { SidenavToggleService } from './_services/sidenav-toggle.service';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { InvoiceService } from './_api/invoice.service';
import { AuthService } from './_api/auth.service';
import { DecimalPipe } from './_pipes/decimal.pipe';
import { NotificationService } from './_services/notification.service';
import { CustomHttpInterceptor } from './_api/_http.interceptor';
import { Store } from './app.store';
import { AuthGuard } from './_guards/auth.guard';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SummaryDialogComponent } from './invoices/summary/summary-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    InvoicesComponent,
    InvoiceDialogComponent,
    InvoiceListComponent,
    InvoiceItemComponent,
    TasksComponent,
    ProfileComponent,
    UsersComponent,
    DecimalPipe,
    ConfirmationDialogComponent,
    SummaryDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [
    MediaMatcher,
    Store,
    TitleColorService,
    SidenavToggleService,
    InvoiceService,
    AuthService,
    NotificationService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    InvoiceDialogComponent,
    ConfirmationDialogComponent,
    SummaryDialogComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
