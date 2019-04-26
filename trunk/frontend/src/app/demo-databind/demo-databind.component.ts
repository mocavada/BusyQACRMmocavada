import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-demo-databind',
  templateUrl: './demo-databind.component.html',
  styleUrls: ['./demo-databind.component.css']
})
export class DemoDatabindComponent implements OnInit {
  messageValue = 'From Component';

  constructor() { }

  ngOnInit() { }

  processString(event) {
    this.messageValue = event + ' then From Component';
    console.log(this.messageValue);

  }
}
