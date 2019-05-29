import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { TasksComponent } from './tasks/tasks.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminGuard } from './_guards/admin.guard';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [ AuthGuard ],
    children: [
      // {
      //   path: 'dashboard',
      //   component: DashboardComponent
      // },
      {
        path: 'invoices',
        component: InvoicesComponent
      },
      // {
      //   path: 'tasks',
      //   component: TasksComponent
      // },
      // {
      //   path: 'categories',
      //   component: CategoriesComponent
      // },
      // {
      //   path: 'profile',
      //   component: ProfileComponent
      // },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [ AdminGuard ]
      },
      {
        path: '',
        redirectTo: 'invoices',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'invoices',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]
