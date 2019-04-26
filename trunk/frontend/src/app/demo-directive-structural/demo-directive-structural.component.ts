import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive-structural',
  templateUrl: './demo-directive-structural.component.html',
  styleUrls: ['./demo-directive-structural.component.css']
})
export class DemoDirectiveStructuralComponent implements OnInit {
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  constructor() { }

  ngOnInit() {
  }

}
