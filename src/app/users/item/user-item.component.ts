import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../_models/user.model';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @Input() user: User;
  @Input() index: number;

  constructor() { }
}
