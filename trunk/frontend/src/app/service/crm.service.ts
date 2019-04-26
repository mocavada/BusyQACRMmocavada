import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  messageSource = new Subject<string>();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  constructor() { }

}
