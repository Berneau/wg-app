import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private titleColorService: TitleColorService,
  ) { }

  ngOnInit() {
    this.titleColorService.change('blue');
  }
}
