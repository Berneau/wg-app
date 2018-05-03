import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';
import { SidenavToggleService } from '../_services/sidenav-toggle.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  color;
  titleSub;

  constructor(
    private titleColorService: TitleColorService,
    private sidenavToggleService: SidenavToggleService
  ) { }

  ngOnInit() {
    // sets color of title
    this.titleSub = this.titleColorService.stream.subscribe((data) => {
      this.color = data;
    })
  }

  ngOnDestroy() {
    this.titleSub.unsubscribe();
  }

  toggleMenu() {
    this.sidenavToggleService.toggle();
  }

}
