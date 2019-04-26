/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsearchComponent } from './asearch.component';

describe('SearchComponent', () => {
  let component: AsearchComponent;
  let fixture: ComponentFixture<AsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
