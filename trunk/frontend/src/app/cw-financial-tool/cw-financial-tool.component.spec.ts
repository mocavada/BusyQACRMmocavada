/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CwFinancialToolComponent } from './cw-financial-tool.component';

describe('CwFinancialToolComponent', () => {
  let component: CwFinancialToolComponent;
  let fixture: ComponentFixture<CwFinancialToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwFinancialToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwFinancialToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
