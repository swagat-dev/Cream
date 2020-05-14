import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() sideBarOpen;
  @Output() toggleSideBar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleSlideBar() {
    this.toggleSideBar.emit(1);
  }

}
