import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo-datashare-output',
  templateUrl: './demo-datashare-output.component.html',
  styleUrls: ['./demo-datashare-output.component.css']
})
export class DemoDataShareOutputComponent implements OnInit {
  @Output() outputEvent = new EventEmitter();
  outputConent = 'something to output.';

  constructor() { }

  ngOnInit() { }

  triggerOutput() {
    this.outputEvent.emit(this.outputConent);
  }
}
