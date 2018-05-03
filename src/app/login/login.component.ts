import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../_api/auth.service';
import { Store } from '../app.store';
import { NotificationService } from '../_services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private handle: NotificationService,
    private store: Store
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit(form) {

    this.authService.login(form).subscribe(
      (response) => {

        this.store.saveToConfig('currentUser', response.user, true);
        this.store.saveToConfig('jwttoken', response.token, true);

        this.router.navigate(['/']);

      },
      (error) => { this.handle.openSnackbar('Wrong username or password', error); }
    )
  }

}
