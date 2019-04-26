import { TestAuthService } from '../service/test-auth.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestAngularbedComponent } from './test-angularbed.component';

describe('TestAngularbedComponent', () => {
  let component: TestAngularbedComponent;
  let fixture: ComponentFixture<TestAngularbedComponent>;
  let authService: TestAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAngularbedComponent],
      providers: [TestAuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(TestAngularbedComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(TestAuthService);

  });

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
