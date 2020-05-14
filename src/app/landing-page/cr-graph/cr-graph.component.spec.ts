import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrGraphComponent } from './cr-graph.component';

describe('CrGraphComponent', () => {
  let component: CrGraphComponent;
  let fixture: ComponentFixture<CrGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
