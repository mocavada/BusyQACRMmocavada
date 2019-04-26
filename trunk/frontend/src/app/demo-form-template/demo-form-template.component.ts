import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-template',
  templateUrl: './demo-form-template.component.html',
  styleUrls: ['./demo-form-template.component.css']
})
export class DemoFormTemplateComponent {

  modelForShowCss = {};
  modelForPattern = {};
  unamePattern = '^[a-z0-9_-]{8,15}$';

  onSubmit(f) {
    console.log(f.value);
    if (f.valid) {
      console.log('This form is good to go.');
    }

  }
}
