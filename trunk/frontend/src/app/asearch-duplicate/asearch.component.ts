import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-asearch',
  templateUrl: './asearch.component.html',
  styleUrls: ['./asearch.component.css']
})
export class AsearchComponent implements OnInit {
  term: string = "";

  studentprofile: any = "";


  studentstatus: any = "";

  constructor(private router:Router,
    private http:HttpClient,
              private route:ActivatedRoute){
                this.route.params.subscribe(params => {
                console.log(params);
                if (params['term']){
                  this.onSearch(params['term'])
                }
                });
  }
  doSearch() {
    this.router.navigate(['search',{term:this.term}])
  }
  onSearch(term: string) {
  }
  ngOnInit() {


    this.http.get<any>("http://localhost:8080/studentstatus")
    .subscribe(data => {
      this.studentstatus = data;
      //console.log(data);
    }, err => {
      console.log(err);
      console.log('Something went wrong!');
    });
 




  }
  onSubmit() {
   // alert(1);
    console.log(this.term,"XXX");
    this.postData(this.term);
}
postData(term) {
  this.http
   .get<any>("http://127.0.0.1:8080//search/student?terms="+term)
   // .post<any>("http://127.0.0.1:8080/sub2", term)
    .subscribe(data => {
      this.studentprofile = data;
      console.log(data);
    }, err => {
      console.log(err);
      console.log('Something went wrong!');
    });
}
// postData(term) {
//   this.http
//     .post<any>("http://127.0.0.1:8080/sub2", term)
//     .subscribe(data => {
//       this.studentprofile = data;
//       console.log(data);
//     }, err => {
//       console.log(err);
//       console.log('Something went wrong!');
//     });
// }


getdata(){

  this.http.get<any>("http://localhost:8080/studentstatus")
   .subscribe(data => {
     this.studentstatus = data;
     console.log(data);
   }, err => {
     console.log(err);
     console.log('Something went wrong!');
   });


  
}



}
