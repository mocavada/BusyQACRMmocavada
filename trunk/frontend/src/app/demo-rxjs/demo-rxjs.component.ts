import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demo-rxjs',
  templateUrl: './demo-rxjs.component.html',
  styleUrls: ['./demo-rxjs.component.css']
})
export class DemoRxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.testSubject();


  }

  testBehaviorSubject() {
    const subject = new BehaviorSubject(0);  // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)  // output initial value, then new values on `next` triggers
    });

    subject.next(1);  // output new value 1 for 'observer A'
    subject.next(2);  // output new value 2 for 'observer A', current value 2 for 'Observer B' on subscription

    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)  // output current value 2, then new values on `next` triggers
    });

    subject.next(3);
  }

  testSubject() {
    const subject = new Subject();

    subject.next(1); // Subjects will not output this value

    subject.subscribe({
      next: (v) => console.log('observerA: ' + v)
    });
    subject.subscribe({
      next: (v) => console.log('observerB: ' + v)
    });

    subject.next(2);
    subject.next(3);
  }

}
