import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrContactComponent } from './cr-contact.component';

describe('CrContactComponent', () => {
  let component: CrContactComponent;
  let fixture: ComponentFixture<CrContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
