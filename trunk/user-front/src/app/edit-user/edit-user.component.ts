import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  username: string
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['admin']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      password:[''],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      roles: [''],
      teams: ['']
    });
    this.userService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['admin']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert("Couldnt update the user");
        });
  }

}
