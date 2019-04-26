import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive-attribute',
  templateUrl: './demo-directive-attribute.component.html',
  styleUrls: ['./demo-directive-attribute.component.css']
})
export class DemoDirectiveAttributeComponent implements OnInit {
  color: string;
  constructor() { }

  ngOnInit() {
  }

}
