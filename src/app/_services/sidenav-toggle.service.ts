import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidenavToggleService {
  private source = new Subject<void>();

  stream = this.source.asObservable();

  toggle() {
    this.source.next();
  }
}
