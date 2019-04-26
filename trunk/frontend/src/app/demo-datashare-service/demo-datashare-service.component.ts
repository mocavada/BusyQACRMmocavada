import { DatashareService } from '../service/datashare.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-datashare-service',
  templateUrl: './demo-datashare-service.component.html',
  styleUrls: ['./demo-datashare-service.component.css']
})
export class DemoDatashareServiceComponent implements OnInit {
  message: string;
  anotherMessage: string;
  constructor(private dService: DatashareService) { }

  ngOnInit() {
    this.dService.messageSource.subscribe(data => this.message = data);
    this.anotherMessage = this.dService.anotherMessage;
  }

}
