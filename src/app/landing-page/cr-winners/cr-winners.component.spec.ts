import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrWinnersComponent } from './cr-winners.component';

describe('CrWinnersComponent', () => {
  let component: CrWinnersComponent;
  let fixture: ComponentFixture<CrWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
