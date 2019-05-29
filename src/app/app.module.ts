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
  MatSnackBarModule,
  MatCardModule
} from '@angular/material';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { InvoiceService } from './_api/invoice.service';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceDialogComponent } from './invoices/dialog/invoice-dialog.component';
import { InvoiceListComponent } from './invoices/list/invoice-list.component';
import { InvoiceItemComponent } from './invoices/item/invoice-item.component';
import { SummaryDialogComponent } from './invoices/summary/summary-dialog.component';

import { TaskService } from './_api/task.service';
import { TasksComponent } from './tasks/tasks.component';

import { CategoryService } from './_api/category.service';
import { CategoriesComponent } from './categories/categories.component';

import { UserService } from './_api/user.service';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/list/user-list.component';
import { UserItemComponent } from './users/item/user-item.component';

import { ProfileComponent } from './profile/profile.component';

import { TitleColorService } from './_services/title-color.service';
import { SidenavToggleService } from './_services/sidenav-toggle.service';
import { AuthService } from './_api/auth.service';
import { DecimalPipe } from './_pipes/decimal.pipe';
import { UsernamePipe } from './_pipes/username.pipe';
import { NotificationService } from './_services/notification.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CustomHttpInterceptor } from './_api/_http.interceptor';
import { Store } from './app.store';
import { AuthGuard } from './_guards/auth.guard';
import { AdminGuard } from './_guards/admin.guard';

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
    CategoriesComponent,
    ProfileComponent,
    UsersComponent,
    DecimalPipe,
    UsernamePipe,
    ConfirmationDialogComponent,
    SummaryDialogComponent,
    UserListComponent,
    UserItemComponent
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
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [
    MediaMatcher,
    Store,
    TitleColorService,
    SidenavToggleService,
    InvoiceService,
    TaskService,
    CategoryService,
    UserService,
    AuthService,
    NotificationService,
    AuthGuard,
    AdminGuard,
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
