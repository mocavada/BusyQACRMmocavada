import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestFormModelComponent } from './test-form-model.component';
import { User } from '../test-component/test-component.component';

describe('TestFormModelComponent', () => {
  let component: TestFormModelComponent;
  let fixture: ComponentFixture<TestFormModelComponent>;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [TestFormModelComponent]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(TestFormModelComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('studentEmail field validity', () => {
    let errors = {};
    const studentEmail = component.form.controls['studentEmail'];
    expect(studentEmail.valid).toBeFalsy();

    // Email field is required
    errors = studentEmail.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set studentEmail to something
    studentEmail.setValue('test');
    errors = studentEmail.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set studentEmail to something correct
    studentEmail.setValue('test@example.com');

    // A=B||C => A=B?B:C
    // null => false
    // if studentEmail.errors is no error, it is false, so errors becomes{}
    errors = studentEmail.errors || {};

    // Because {}['required'] is nothing by the key 'required', it will be false.
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();

  });

  it('password field validity', () => {
    let errors = {};
    const password = component.form.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set studentEmail to something
    password.setValue('123456');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set studentEmail to something correct
    password.setValue('123456789');
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['studentEmail'].setValue('test@test.com');
    component.form.controls['password'].setValue('123456789');
    expect(component.form.valid).toBeTruthy();

    let user: User;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // Trigger the login function
    component.login();

    // Now we can check to make sure the emitted value is correct
    expect(user.studentEmail).toBe('test@test.com');
    expect(user.password).toBe('123456789');
  });
});
