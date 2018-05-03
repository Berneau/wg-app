import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TitleColorService {
  private source = new Subject<void>();

  stream = this.source.asObservable();

  change(color) {
    this.source.next(color);
  }
}
