import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw-todolist',
  templateUrl: './cw-todolist.component.html',
  styleUrls: ['./cw-todolist.component.css']
})
export class CwTodolistComponent implements OnInit {
  inComingItem: string;
  todoList: Array<String> = [];

  constructor() { }

  ngOnInit() { }

  onAdd() {
    // console.log('test');
    this.todoList.push(this.inComingItem);
    this.inComingItem = '';
    // console.log(this.todoList);

  }
  onRemove(index) {
    this.todoList.splice(index, 1);
    // console.log(index);

  }

}
