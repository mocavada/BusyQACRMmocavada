/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CwTodolistComponent } from './cw-todolist.component';

describe('TodolistComponent', () => {
  let component: CwTodolistComponent;
  let fixture: ComponentFixture<CwTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
