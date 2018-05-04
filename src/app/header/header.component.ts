import { Component, OnInit } from '@angular/core';

import { TitleColorService } from '../_services/title-color.service';
import { SidenavToggleService } from '../_services/sidenav-toggle.service';
import { Store } from '../app.store';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  color;
  titleSub;
  currentUser;

  constructor(
    private titleColorService: TitleColorService,
    private sidenavToggleService: SidenavToggleService,
    private store: Store
  ) { }

  ngOnInit() {
    this.currentUser = this.store.readFromConfig('currentUser');

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
