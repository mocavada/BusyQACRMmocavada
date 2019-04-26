import { Component, OnInit } from '@angular/core';
import { JsonExample } from './pojo-jsonexample';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-demo-httpclient',
  templateUrl: './demo-httpclient.component.html',
  styleUrls: ['./demo-httpclient.component.css']
})
export class DemoHttpclientComponent implements OnInit {
  results: JsonExample;
  constructor(private http: HttpClient) { }

  ngOnInit() { }

  getData() {
    // Make the HTTP request:
    this.http
      .get<JsonExample>('https://jsonplaceholder.typicode.com/posts/2')
      .pipe(
        retry(3), catchError(this.handleError)
      )
      .subscribe(data => {
        // this.results = (JsonExample)data;
        this.results = data;
        console.log(this.results);
      }, err => {
        console.log('Something went wrong!');
      });
  }

  postData() {
    const postExample = new JsonExample(10, 1000, 'testTitle', 'testBody');
    // Post
    this.http
      .post<JsonExample>('https://jsonplaceholder.typicode.com/posts', postExample)
      .subscribe(data => {
        this.results = data;
        console.log(this.results);
      }, err => {
        console.log('Something went wrong!');
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}

