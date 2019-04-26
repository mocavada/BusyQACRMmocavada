import { TestAuthService } from '../service/test-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-jasmine-mock-spy',
  templateUrl: './test-jasmine-mock-spy.component.html',
  styleUrls: ['./test-jasmine-mock-spy.component.css']
})
export class TestJasmineMockSpyComponent implements OnInit {

  constructor(private auth: TestAuthService) { }
  needsLogin() {
    return !this.auth.isAuthenticated();
  }
  ngOnInit() {
  }

}
