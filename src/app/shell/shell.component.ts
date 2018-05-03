import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { SidenavToggleService } from '../_services/sidenav-toggle.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  mobileQuery: MediaQueryList;
  sidenavSub;
  private _mobileQueryListener: () => void;
  @ViewChild('snav') sidenav;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenavToggleService: SidenavToggleService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.sidenavSub = this.sidenavToggleService.stream.subscribe((data) => {
      if (this.sidenav) this.sidenav.toggle();
    })
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.sidenavSub.unsubscribe();
  }

}
