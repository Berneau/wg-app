import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private titleColorService: TitleColorService
  ) { }

  ngOnInit() {
    this.titleColorService.change('teal');
  }

}
