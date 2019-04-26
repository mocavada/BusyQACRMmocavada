import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatashareComponent } from './demo-datashare.component';

describe('DemoDatashareComponent', () => {
  let component: DemoDatashareComponent;
  let fixture: ComponentFixture<DemoDatashareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDatashareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatashareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
