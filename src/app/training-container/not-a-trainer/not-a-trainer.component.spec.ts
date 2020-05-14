import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotATrainerComponent } from './not-a-trainer.component';

describe('NotATrainerComponent', () => {
  let component: NotATrainerComponent;
  let fixture: ComponentFixture<NotATrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotATrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotATrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
