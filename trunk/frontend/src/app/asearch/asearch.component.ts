import { StudentregistrationformService } from './../service/studentregistrationform.service';
import { StudentRecords } from './../aregister/pojo/StudentRecords.component';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  studentprofile: StudentRecords[];
  //allStudentProfiles: any ="";
  tableflag: boolean = false;
  studentRecordSearchForm: FormGroup;
  //errorMessage: String;
  deleteMessage: String;
  deleteFlag: boolean = false;
  tableflag2: boolean = false;
  phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


  constructor(private router:Router,
    private http:HttpClient,
              private route:ActivatedRoute,
              private fb: FormBuilder,
              private studentService: StudentregistrationformService
              ){
                this.route.params.subscribe(params => {
                //console.log(params);
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

    // this.studentRecordSearchForm = this.fb.group({

    //   'search': ['']

    // })

    this.tableflag2 = false;
    this.tableflag = false;




  }
  onSubmit() {
   // alert(1);
   
    //console.log(this.term,"XXX");
    console.log(this.term)
    if(this.term == ''){
      this.searchUsingBlankfield();
    }
    else if(this.term.includes("@")){
      this.searchUsingEmailAddress(this.term);
    }
    else if(this.term == 'Full Stack Java Developer' || this.term =='Software Testing' || this.term == 'Business Analyst' || this.term == 'Project Management' ){
      this.searchUsingCourseTypeOrCourse(this.term)
    }
    
    else if(this.term.match(this.phoneRegex)){
      this.searchUsingPhoneNumber(this.term)
    }
    else{
      this.searchUsingfirstNameOrName(this.term);
    }
   
}
searchUsingCourseTypeOrCourse(term){

  this.tableflag = true;
  this.studentService.SearchStudentDataUsingCourseTypeOrCourse(term).subscribe(
    response => {
                   console.log(response)
                   this.studentprofile = response;
    }
  );

}

searchUsingPhoneNumber(term){

  this.tableflag = true;
  this.studentService.SearchStudentDataUsingPhoneNumber(term).subscribe(
    response => {
                   console.log(response);
                   this.studentprofile = response;
    }
  );
}

searchUsingBlankfield(){

  this.tableflag = true;
  this.http
      .get<any>("http://localhost:8080/students").subscribe(
        response => {
          this.studentprofile = response;
          //console.log(response);
          
        },
        error => {
          console.log(error)
        }); 
}

searchUsingfirstNameOrName(term) {

  this.tableflag = true;
  this.studentService.SearchStudentDataUsingfirstNameOrName(term)
  .subscribe(
    response => {
                   this.studentprofile = response;
                
    }
  );
   
}

searchUsingEmailAddress(term){ 

  this.tableflag = true;

  console.log(this.term)

  this.studentService.searchStudentRecordUsingEmailAddress(term)
      .subscribe(
        data => {
          console.log(data)
          this.studentprofile = data;
        }, err => console.log(err)

      );
}

onUpdate(sp: StudentRecords) {

  this.router.navigate(['/AregisterUpdateComponent', sp.id]);
  //console.log(sp);
  

}

onDelete(sp: StudentRecords) {

  this.studentService.deleteStudentRecord(sp.id).subscribe(
    response => {
      console.log('Data has been deleted')
      this.searchUsingBlankfield();
    });
  this.deleteMessage =  "Id " + sp.id + " has been deleted sucessfully!"
  this.deleteFlag = true;
 // console.log(this.deleteMessage)

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
}
