import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo-typescript',
  templateUrl: './demo-typescript.component.html',
  styleUrls: ['./demo-typescript.component.css']
})
export class DemoTypescriptComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }


  // Type Annotation
  demoFunction(inputValue: string) {
    // Number
    const decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

    // Stirng
    let person: string = 'Mike';
    let age = 37;
    let sentence: string = `Oh, ${person} is ${age} years old.`;

    // Array
    let list: number[] = [1, 2, 3];

    // Tuple
    let x: [string, number];
    x = ['hello', 10];
    // x = [10, 'hello'];
    // x[3] = true;
  }

  demoLoop() {
    const list = [4, 5, 6];
    for (let i in list) { // 0,1,2
      console.log(i);
    }

    for (let i of list) { //4,5,6
      console.log(i);
    }
  }

  demoClass() {
    console.log((new Circle(2)).area());
  }
}

interface Shape {
  area(): number;
}

class Circle implements Shape {
  static readonly pi = 3.1415;
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  area(): number {
    return this.radius ** 2 * Circle.pi;
  }

}