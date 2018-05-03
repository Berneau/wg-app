import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private titleColorService: TitleColorService
  ) { }

  ngOnInit() {
    this.titleColorService.change('pink');
  }

}
