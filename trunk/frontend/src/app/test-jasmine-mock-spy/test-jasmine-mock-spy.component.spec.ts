import { TestAuthService } from '../service/test-auth.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestJasmineMockSpyComponent } from './test-jasmine-mock-spy.component';
import { log } from 'util';

describe('TestJasmineMockSpyComponent', () => {

  // ======== Mocking with fake classes
  class MockAuthService {
    authenticated = false;
    isAuthenticated() {
      return this.authenticated;
    }
  }

  describe('Component: Login', () => {
    // ======== spy

    let component: TestJasmineMockSpyComponent;
    let service: TestAuthService;
    let spy: any;

    beforeEach(() => {
      service = new TestAuthService();
      component = new TestJasmineMockSpyComponent(service);
    });

    afterEach(() => {
      service = null;
      component = null;
    });


    it('canLogin returns false when the user is not authenticated', () => {
      spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
      expect(component.needsLogin()).toBeTruthy();
      log('pring out:' + service.isAuthenticated());
      expect(service.isAuthenticated).toHaveBeenCalled();

    });

    it('canLogin returns false when the user is not authenticated', () => {
      spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
      expect(component.needsLogin()).toBeFalsy();
      expect(service.isAuthenticated).toHaveBeenCalled();
    });

    // ======== Mocking with fake classes

    // let component: TestJasmineMockSpyComponent;
    // let service: MockAuthService;

    // beforeEach(() => {
    //   service = new MockAuthService();
    //   component = new TestJasmineMockSpyComponent(service);
    // });

    // afterEach(() => {
    //   service = null;
    //   component = null;
    // });


    // it('canLogin returns false when the user is not authenticated', () => {
    //   service.authenticated = false;
    //   expect(component.needsLogin()).toBeTruthy();
    // });

    // it('canLogin returns false when the user is not authenticated', () => {
    //   service.authenticated = true;
    //   expect(component.needsLogin()).toBeFalsy();
    // });

    // ======== Testing with the real `AuthService`

    // let component: TestJasmineMockSpyComponent;
    // let service: TestAuthService;

    // beforeEach(() => {
    //   service = new TestAuthService();
    //   component = new TestJasmineMockSpyComponent(service);
    // });

    // afterEach(() => {
    //   localStorage.removeItem('token');
    //   service = null;
    //   component = null;
    // });


    // it('needsLogin returns true when the user is not authenticated', () => {
    //   expect(component.needsLogin()).toBeTruthy();
    // });

    // it('needsLogin returns false when the user is authenticated', () => {
    //   localStorage.setItem('token', '12345');
    //   expect(component.needsLogin()).toBeFalsy();
    // });

  });
});
