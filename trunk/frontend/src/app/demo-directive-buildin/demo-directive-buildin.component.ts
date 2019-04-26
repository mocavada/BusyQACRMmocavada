import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive-buildin',
  templateUrl: './demo-directive-buildin.component.html',
  styleUrls: ['./demo-directive-buildin.component.css']
})
export class DemoDirectiveBuildinComponent implements OnInit {

  conditionExp = true;
  selectionExp = 1;
  list = ['a', 'b', 'c'];

  blueStyle = {
    'background-color': 'blue'
  };
  redStyle = {
    'background-color': 'red'
  };
  setRedStyle() {
    return this.redStyle;
  }



  constructor() { }

  ngOnInit() {
  }

}
