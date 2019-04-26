/* tslint:disable:no-unused-variable */
import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestAsyncComponent } from './test-async.component';
import { TestAuthService } from '../service/test-auth.service';

describe('TestAsyncComponent', () => {
  let component: TestAsyncComponent;
  let fixture: ComponentFixture<TestAsyncComponent>;
  let authService: TestAuthService;
  let el: DebugElement;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [TestAsyncComponent],
      providers: [TestAuthService]
    });

    fixture = TestBed.createComponent(TestAsyncComponent);   // create component and test fixture
    component = fixture.componentInstance;      // get test component from the fixture
    authService = TestBed.get(TestAuthService); // UserService provided to the TestBed
    el = fixture.debugElement.query(By.css('a')); //  get the "a" element by CSS selector (e.g., by class name)
    fixture.detectChanges();
  });

  it('Button label via async() and whenStable()', async(() => {
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    // setup service
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(Promise.resolve(true));

    // setup async test if login shows This is called when ALL pending promises have been resolved
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });

    // check status
    component.checkLoginStatus();
  }));

  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    // setup service
    spyOn(authService, 'isAuthenticatedAsync').and.returnValue(Promise.resolve(true));

    // check status
    component.checkLoginStatus();

    // Simulates the passage of time until all pending asynchronous activities complete
    tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }));

  // it('Button label via jasmine.done', (done) => {
  //   expect(el.nativeElement.textContent.trim()).toBe('Login');

  //   // Make the authService return a promise that resolves to true
  //   let spy = spyOn(authService, 'isAuthenticatedAsync').and.returnValue(Promise.resolve(true));
  //   // We trigger the component to check the authService again
  //   component.ngOnInit();

  //   // We now want to call a function when the Promise returned from authService.isAuthenticated() is resolved
  //   spy.calls.mostRecent().returnValue.then(() => {
  //     // The needsChanged boolean has been updated on the Component so to update the template we trigger change detection
  //     fixture.detectChanges();
  //     // Now the label is Logout
  //     expect(el.nativeElement.textContent.trim()).toBe('Logout');
  //     // We tell jasmine we are done with this test spec
  //     done();
  //   });
  // });
});
