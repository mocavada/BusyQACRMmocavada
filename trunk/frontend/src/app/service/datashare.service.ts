import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatashareService {

  // (1) Subject doesnot return the current value on Subscription. It triggers only on .next(value) call and return/output the value
  anotherMessage = 'default message';

  // (2) BehaviourSubject will return the initial value or the current value on Subscription
  messageSource = new BehaviorSubject<string>('default message');

  // (3) encapsolate messsageSource, and reveal by asObservable
  // private messageSource = new BehaviorSubject<string>('default message');
  // currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  constructor() { }
}
