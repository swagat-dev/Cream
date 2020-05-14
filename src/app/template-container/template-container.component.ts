import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {

  public hasScrolled = false;
  public activateRoute;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.activateRoute = this.activatedRoute.routeConfig.children[0].path;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset > 2) {
      this.hasScrolled = true;
    } else {
      this.hasScrolled = false;
    }
  }

  public navigateTo(screenName) {
    if ( screenName === 'threads' ) {
      this.router.navigate(['/success/threads']);
      this.activateRoute = this.activatedRoute.routeConfig.children[0].path;
    } else if (screenName === 'trainings') {
      this.router.navigate(['/success/training']);
      this.activateRoute = this.activatedRoute.routeConfig.children[1].path;
    }
  }
}
