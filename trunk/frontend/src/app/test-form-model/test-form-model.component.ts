import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test-form-model',
  templateUrl: './test-form-model.component.html',
  styleUrls: ['./test-form-model.component.css']
})
export class TestFormModelComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      studentEmail: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }

  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
        new User(
          this.form.value.studentEmail,
          this.form.value.password
        )
      );
    }
  }
}
export class User {
  constructor(public studentEmail: string, public password: string) {
  }
}
