import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Parallax from 'parallax-js';

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
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private handle: NotificationService,
    private store: Store
  ) { }

  ngOnInit() {
    this.createForm();

    // this.initParalax();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  initParalax() {
    let scene = document.getElementById('scene');
    let parallaxInstance = new Parallax(scene);
  }

  onSubmit(form) {
    this.loading = true;
    this.authService.login(form).subscribe(
      (response) => {

        this.loading = false;
        this.store.saveToConfig('currentUser', response.user, true);
        this.store.saveToConfig('jwttoken', response.jwt, true);

        this.router.navigate(['/']);
      },
      (error) => {
        this.handle.openSnackbar('Wrong username or password', error);
        this.loading = false;
      }
    )
  }

}
