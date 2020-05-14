import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {

  @Input() hasScrolled;
  @Input() showback;
  @Output() backSuccess = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // log out method
  public signOut() {}

  public openProfile() {
    this.router.navigate(['/profile']);
  }

  public backBtnClicked() {
    this.showback = false;
    this.backSuccess.emit(this.showback);
    this.router.navigate(['/success/threads']);
  }
}
