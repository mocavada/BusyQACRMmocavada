import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCsvComponent } from './demo-csv.component';

describe('DemoCsvComponent', () => {
  let component: DemoCsvComponent;
  let fixture: ComponentFixture<DemoCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
