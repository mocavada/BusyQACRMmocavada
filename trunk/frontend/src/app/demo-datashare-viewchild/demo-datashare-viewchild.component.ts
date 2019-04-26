import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-datashare-viewchild',
  templateUrl: './demo-datashare-viewchild.component.html',
  styleUrls: ['./demo-datashare-viewchild.component.css']
})
export class DemoDataShareViewchildComponent implements OnInit {
  childV = 'fromChild';
  constructor() { }

  ngOnInit() {
  }

  changeMessage() {
    this.childV += ' changed';
  }
}
