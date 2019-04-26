/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoFormModelComponent } from './aregister.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
describe('DemoFormModelComponent', () => {
  let component: DemoFormModelComponent;
  let fixture: ComponentFixture<DemoFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoFormModelComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
