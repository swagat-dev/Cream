import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrProcessComponent } from './cr-process.component';

describe('CrProcessComponent', () => {
  let component: CrProcessComponent;
  let fixture: ComponentFixture<CrProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
