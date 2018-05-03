import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NotificationService } from './_services/notification.service';

@Injectable()
export class Store {

  private config = {
    currentUser: null,
    jwttoken: null
  }

  constructor(
    private handle: NotificationService
  ) { }

  initLS() {
    let jwttoken = this.readFromLocalStorage('jwttoken');
    let currentUser = this.readFromLocalStorage('currentUser');

    if (!jwttoken || !currentUser) return false;

    this.handle.log('Config loaded from SS');

    this.saveToConfig('jwttoken', jwttoken);
    this.saveToConfig('currentUser', currentUser);

    this.handle.log('Config loaded into Store.');
    return true;
  }

  saveToConfig(key, value, persistent = false) {
    this.config[key] = value;
    if (persistent) this.saveToLocalStorage(key, value);
  }

  readFromConfig(key) {
    return this.config[key];
  }

  clearConfig() {
    this.config = {
      currentUser: null,
      jwttoken: null
    }

    this.removeFromLocalStorage('jwttoken');
    this.removeFromLocalStorage('currentUser');

    this.handle.log('Config cleared from Store.');
  }

  saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeFromLocalStorage(key) {
    localStorage.removeItem(key);
  }
}
