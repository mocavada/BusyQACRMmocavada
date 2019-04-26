import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTypescriptComponent } from './demo-typescript.component';

describe('DemoTypescriptComponent', () => {
  let component: DemoTypescriptComponent;
  let fixture: ComponentFixture<DemoTypescriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTypescriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
