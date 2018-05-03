import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(
    private titleColorService: TitleColorService
  ) { }

  ngOnInit() {
    this.titleColorService.change('green');
  }

}
