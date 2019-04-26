import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from "../model/user.model";

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {
  board: string;
  errorMessage: string;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPmUserByTeam().subscribe(
        data => {
          this.users= data.result;
        },
        error => {
          this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        }
      )
    }
}
