import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cr-header',
  templateUrl: './cr-header.component.html',
  styleUrls: ['./cr-header.component.scss']
})
export class CrHeaderComponent implements OnInit, OnChanges {

  public afterHover = [];
  public afterHoverOut = [];
  public isClicked = false;
  public dashboardMenu = ['Home', 'Process', 'Statistics', 'Winners', 'Contact Us'];
  public lastSelectedMenu;
  @Input() hasScrolled;
  @Input() changedHeading;
  @Output() scrollEvent = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
    this.setToggle();
  }

  ngOnChanges() {
    this.afterHover = [true, false, false, false, false];
    this.dashboardMenu.forEach( menu => {
      if (this.changedHeading && this.changedHeading === menu) {
        if (this.changedHeading === 'Home') {
          this.afterHover = [true, false, false, false, false];
        } else {
          this.afterHover.splice(0, 1, false);
          this.afterHover.splice(this.dashboardMenu.indexOf(this.changedHeading), 1, true);
        }
      }
    });
  }

  public setToggle() {
    this.dashboardMenu.forEach( menu => {
      if ( this.dashboardMenu.indexOf(menu) === 0) {
        this.afterHover.push(true);
      } else {
        this.afterHover.push(false);
      }
    });
  }

  public toggleDivider(menu) {
    this.afterHover = [];
    this.isClicked = true;
    this.dashboardMenu.forEach(menuItem => {
      if ( menuItem === menu) {
        this.afterHover.push(true);
      } else {
        this.afterHover.push(false);
      }
    });
  }

  public resetToggle() {
    if (!this.isClicked) {
      this.afterHover = Object.assign([], this.afterHoverOut);
    }
  }

  public tempToggle(menu) {
    this.isClicked = false;
    this.afterHoverOut = Object.assign([], this.afterHover);
    this.dashboardMenu.forEach( menuItem => {
      if (menu === menuItem) {
        this.afterHover.splice(this.dashboardMenu.indexOf(menuItem), 1, true);
      }
    });
  }

  public goToLogin() {
    this.router.navigate(['/login']);
    // this.router.navigate(['/success/threads']);
  }

  public movetoPage(selectedMenu) {
    // console.log('form Move method', selectedMenu);

    // switch (selectedMenu) {
    //   case 'Winners':
    //     window.scrollTo(0, 100);
    // }

    this.scrollEvent.emit(selectedMenu);
  }
}
