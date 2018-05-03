import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private titleColorService: TitleColorService
  ) { }

  ngOnInit() {
    this.titleColorService.change('orange');
  }

}
