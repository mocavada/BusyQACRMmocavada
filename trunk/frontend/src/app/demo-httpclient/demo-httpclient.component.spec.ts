import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoHttpclientComponent } from './demo-httpclient.component';

describe('DemoHttpclientComponent', () => {
  let component: DemoHttpclientComponent;
  let fixture: ComponentFixture<DemoHttpclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoHttpclientComponent ],
      // imports:[HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
