import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsTrainerComponent } from './as-trainer.component';

describe('AsTrainerComponent', () => {
  let component: AsTrainerComponent;
  let fixture: ComponentFixture<AsTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
