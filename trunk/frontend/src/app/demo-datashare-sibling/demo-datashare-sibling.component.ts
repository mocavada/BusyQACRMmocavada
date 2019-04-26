import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-demo-datashare-sibling',
  templateUrl: './demo-datashare-sibling.component.html',
  styleUrls: ['./demo-datashare-sibling.component.css']
})
export class DemoDatashareSiblingComponent implements OnInit {
  message: string;
  anotherMessage: string;
  constructor(private dService: DatashareService) { }

  ngOnInit() {
    this.dService.messageSource.subscribe(data => this.message = data);
    this.anotherMessage = this.dService.anotherMessage;
  }

  triggerChange() {

    // (1) sync by observer
    this.dService.changeMessage('changed by sibling');

    // (2) doesn't sync with others
    this.anotherMessage = 'change';
    this.dService.anotherMessage = 'change';
  }

}
