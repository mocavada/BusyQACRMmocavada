import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirectiveStructuralComponent } from './demo-directive-structural.component';

describe('DemoDirectiveStructuralComponent', () => {
  let component: DemoDirectiveStructuralComponent;
  let fixture: ComponentFixture<DemoDirectiveStructuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDirectiveStructuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDirectiveStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
