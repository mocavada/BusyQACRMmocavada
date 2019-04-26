import { TestAuthService } from '../service/test-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-angularbed',
  templateUrl: './test-angularbed.component.html',
  styleUrls: ['./test-angularbed.component.css']
})
export class TestAngularbedComponent implements OnInit {

  constructor(private auth: TestAuthService) { }

  ngOnInit() {
  }
  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}
