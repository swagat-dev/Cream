import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrHeaderComponent } from './cr-header.component';

describe('CrHeaderComponent', () => {
  let component: CrHeaderComponent;
  let fixture: ComponentFixture<CrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
