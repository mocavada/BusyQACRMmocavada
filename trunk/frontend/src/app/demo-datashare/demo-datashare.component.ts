import { DatashareService } from '../service/datashare.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoDataShareViewchildComponent } from '../demo-datashare-viewchild/demo-datashare-viewchild.component';

@Component({
  selector: 'app-demo-datashare',
  templateUrl: './demo-datashare.component.html',
  styleUrls: ['./demo-datashare.component.css']
})
export class DemoDatashareComponent implements OnInit {
  theOutput;

  @ViewChild(DemoDataShareViewchildComponent) child;
  parentV = 'from Parent';

  // constructor() { }
  // ngOnInit() { }
  message: string;
  anotherMessage: string;

  constructor(private dService: DatashareService) { }

  ngOnInit() {
    this.dService.messageSource.subscribe(data => this.message = data);
    this.anotherMessage = this.dService.anotherMessage;
  }

  // output
  // child->parent via output
  outputReceiver(receivedContent: String) {
    this.theOutput = receivedContent;
    console.log(receivedContent);
  }

  // child->parent via viewChild
  getFromChild() {
    this.parentV = this.child.childV;
  }

  // parent->child via viewChild
  sendToChild() {
    this.child.childV = this.parentV;
  }
}
