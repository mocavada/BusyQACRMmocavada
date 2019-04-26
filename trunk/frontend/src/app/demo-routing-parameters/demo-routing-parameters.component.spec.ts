import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRoutingParametersComponent } from './demo-routing-parameters.component';

describe('DemoRoutingParametersComponent', () => {
  let component: DemoRoutingParametersComponent;
  let fixture: ComponentFixture<DemoRoutingParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRoutingParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRoutingParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
