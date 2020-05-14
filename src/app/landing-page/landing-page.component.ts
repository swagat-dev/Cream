import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public hasScrolled = false;
  public formDashboard = true;
  public changedHeading;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.hasScrolled = false;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset > 2) {
      this.hasScrolled = true;
    } else {
      this.hasScrolled = false;
    }
    // 1070 for process
    // 2380 for statistics
    // 3712 for winners
    // 4665 for contact us
    // 5376 for footer

    if ( 2379 > window.pageYOffset && window.pageYOffset > 1070) {
      // process
      this.changedHeading = 'Process';
    } else if (3711 > window.pageYOffset && window.pageYOffset > 2379) {
      // statistics
      this.changedHeading = 'Statistics';
    } else if (4664 > window.pageYOffset && window.pageYOffset > 3711) {
      // winners
      this.changedHeading = 'Winners';
    } else if (5375 > window.pageYOffset && window.pageYOffset > 4664) {
      // contact Us
      this.changedHeading = 'Contact Us';
    } else if (window.pageYOffset < 1070) {
      this.changedHeading = 'Home';
    }
  }

  public scrollEvent(e) {
    if ( e === 'Contact Us') {
      // e = 'Contact';
      document.getElementById('Contact').scrollIntoView();
    } else if (e === 'Home') {
      window.scrollTo(0, 0);
    } else {
      document.getElementById(e).scrollIntoView();
    }
  }
}
