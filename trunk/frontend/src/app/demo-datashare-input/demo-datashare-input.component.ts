import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo-datashare-input',
  templateUrl: './demo-datashare-input.component.html',
  styleUrls: ['./demo-datashare-input.component.css']
})
export class DemoDataShareInputComponent implements OnInit {
  @Input('inputContent') inputContent: string;

  constructor() { }

  ngOnInit() {
  }

}
