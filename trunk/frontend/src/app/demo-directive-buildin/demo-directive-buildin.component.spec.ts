import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirectiveBuildinComponent } from './demo-directive-buildin.component';

describe('DemoDirectiveBuildinComponent', () => {
  let component: DemoDirectiveBuildinComponent;
  let fixture: ComponentFixture<DemoDirectiveBuildinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDirectiveBuildinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDirectiveBuildinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
