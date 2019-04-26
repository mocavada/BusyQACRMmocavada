import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirectiveAttributeComponent } from './demo-directive-attribute.component';

describe('DemoDirectiveAttributeComponent', () => {
  let component: DemoDirectiveAttributeComponent;
  let fixture: ComponentFixture<DemoDirectiveAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDirectiveAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDirectiveAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
