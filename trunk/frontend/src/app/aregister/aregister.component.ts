import { StudentBatch } from './pojo/studentBatch';
import { ActivatedRoute } from '@angular/router';
import { StudentRecords } from './pojo/StudentRecords.component';
import { StudentregistrationformService } from './../service/studentregistrationform.service';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ControlContainer, AbstractControl, NgForm } from '@angular/forms';
import { Component, OnInit, Optional, EventEmitter } from '@angular/core';
import { Register } from './Register1';
import { HttpClient } from '@angular/common/http';
import { StudentCourseType } from './pojo/studentCourseType.component';



@Component({
  selector: 'app-aregister',
  templateUrl: './aregister.component.html',
  styleUrls: ['./aregister.component.css']
})
export class AregisterComponent implements OnInit {


  //s_id: number;
  //newRecord: StudentRecords;
  studentRegistrationform: FormGroup;
  //statuses = ['lead','register','not sure','dont call','student', 'alumni'];
  //status = ['Lead', 'Register', 'Alumni'];
  statusTypes;
  //courses = ['Testing', 'Java', 'BA', 'Project Management'];
  courseTypes;
  //batches = ['Autumn', 'Winter', 'Spring', 'Summer'];
  batchTypes;
  //years = ['2018', '2019', '2020', '2021'];
  yearsList;
  register = new Register(0, '', '', '', '', '', '', '', '', 0);
  //register = new Register ('id' : studentId,'','','','','');
  //autoId = {'id': studentId};
  // autoId = {'id': 1234};
  StatusValueflag: boolean;
  statusform: any;
  statusValue: any;
  registerSuccessMessage: string;
  registerSuccessMessageFlag: boolean = false;
  registerErrorMessage: string;
  registerErrorMessageFlag: boolean = false;
  contactAndEmailValidationMessage: string;
  contactAndEmailValidationMessageFlag = false;
  registerErrorMessageEmailMatchFlag = false;
  registerErrorEmailMatchMessage: string;
  emailRecord: StudentRecords[];
  phoneRecord: StudentRecords[];


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private studentService: StudentregistrationformService,
    private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {

    this.createForm();
    this.getCourseList();
    this.getStatusList();
    this.getBatchList();
    this.getYearsList();

    this.StatusValueflag = false;
    this.checkStatusformValue();
    // this.s_id = this.activatedRoute.snapshot.params['id'];
    // this.studentService.getStudentRecordbyId(this.s_id).subscribe(
    //   response => console.log("Record: " + response)
    // );
    //console.log(this.studentCourseType.value)
  }

  getCourseList() {


    // this.studentService.courseTypeList.subscribe(
    //   response => {
    //                  if(response != null) {
    //                   this.courseTypes = response;

    //                  }
    //   }
    // );
    this.studentService.getCourseType().subscribe(
      response => {
        this.courseTypes = response
        //console.log(response)
      }
    );
  }

  getStatusList() {

    this.studentService.getStatusTypes().subscribe(
      response => {

        this.statusTypes = response
       // console.log(response)
      }
    );
    //this.studentService.getStatusTypes();
  }

  getBatchList() {

    this.studentService.getBatchTypes().subscribe(
      response => {
        this.batchTypes = response
        // console.log(response)

      });
  }

  getYearsList() {

    this.studentService.getYears().subscribe(
      response => {
        this.yearsList = response
        // console.log(response)
      });
  }

  createForm() {

    this.studentRegistrationform = this.fb.group({

      firstName: ['', Validators.required],
      lastName: [''],

      studentEmail: ['', Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$') ],
      studentContact: ['',  Validators.minLength(10)],

      studentCourseType: this.fb.group({
        id: [0, Validators.required]
        
      }),

      studentStatus: this.fb.group({
        id: [0, [Validators.required]]
        //studentStatus: ['']
      }),


      studentBatch: this.fb.group({

        id: [0]
        //studentBatch: ['']

      }),

      studentYear: this.fb.group({

        id: [0]
        //year: ['']
      }),

      comments: [''],
      remarks: ['']
    });

    this.StatusValueflag = false;

  }



  onSubmit() {

    // this.studentService.SearchStudentDataUsingEmailOrPhoneNumber(this.studentEmail.value, this.studentContact.value)
    // .subscribe(
    //   response => {
    //                   console.log(response);
    //                   if(response.length == 0) {
    //                     this.postForm();
    //                   }
    //                   else{
    //                     this.registerErrorMessageEmailMatchFlag = true;
    //                     this.registerErrorEmailMatchMessage = "Record already exist with this Email or Phone Number";

    //                   }
    //   }, err => console.log(err)
    // );

    
    console.log(this.studentEmail.value);
    this.studentService.searchStudentRecordUsingEmailAddress(this.studentEmail.value)
    .subscribe(
      response => {
        //console.log(response)
         this.emailRecord= response;
         console.log(this.emailRecord)
        console.log(this.emailRecord.length)
        if(this.emailRecord.length == 0){
          this.postForm();
        }
        else{
          this.registerErrorMessageEmailMatchFlag = true;
          this.registerErrorEmailMatchMessage = "Record already exist with this studentEmail";
        }
      }
    );
    
  }

  postForm() {

    this.studentService.postData(this.studentRegistrationform.value).subscribe(
      response => {

        this.registerSuccessMessageFlag = true;
        this.registerSuccessMessage = "Request has been processed Succesfully!"
        this.onresetForm() 
      },
      error => {
        //console.log(error)
        this.registerErrorMessageFlag = true;
        this.registerErrorMessage = "Request has been denied!. Please enter valid values or contact your administrator"
      });

      
  }


  get remarks() {
    return this.studentRegistrationform.get('remarks') as FormControl;
  }
  get firstName() {
    return this.studentRegistrationform.get('firstName') as FormControl;
  }
  get lastName() {
    return this.studentRegistrationform.get('lastName') as FormControl;
  }
  get studentEmail() {
    return this.studentRegistrationform.get('studentEmail') as FormControl;
  }
  get studentContact() {
    return this.studentRegistrationform.get('studentContact') as FormControl;
  }
  get studentCourseType() {
    return this.studentRegistrationform.get('studentCourseType.id') as FormControl;
  }
  get studentStatus() {
    return this.studentRegistrationform.get('studentStatus.id') as FormControl;
  }
  get studentBatch() {
    return this.studentRegistrationform.get('studentBatch.id') as FormControl;
  }
  get studentYear() {
    return this.studentRegistrationform.get('studentYear.id') as FormControl;
  }



  //== listens to the value of the 'statusform' in order to dynamically show the year and batch dropdown
  checkStatusformValue() {

    this.studentRegistrationform.get('studentStatus.id').valueChanges.subscribe(
      value => {
        console.log("Status Value: " + value);
        if (value === '2' || value === '3')
          this.StatusValueflag = true;
        else {
          this.StatusValueflag = false;
          this.studentRegistrationform.get('studentBatch.id').setValue(null);
          this.studentRegistrationform.get('studentYear.id').setValue(null);
        }

      });
  }

  //== checks the status value entered in the form. in order to dynamically present the form
  // checkStatusValue(event: Event) {

  //   //console.log(event);
  //   this.statusValue = (<HTMLInputElement>event.target).value;
  //   //console.log(this.statusValue);
  //   if(this.statusValue === 'Register' || this.statusValue === 'Alumni') {

  //   this.StatusValueflag = true;
  //   }

  //   //console.log('method-selectedStatusflag: '+ this.StatusValueflag);
  // }

  //== submit the form while click Add Record button



  //  resetForm(form: AbstractControl) {

  //   this.firstName= null;

  //  }

  onresetForm() {
    this.studentRegistrationform.reset();
  }





  // postData(register) {

  //   this.http
  //     .post<Register>("http://127.0.0.1:8080/sub3", register)
  //     .subscribe(data => {

  //     }, err => {
  //       console.log(err.error.text);

  //     });
  // }

  // validationMessages = {


  //   'contact': {

  //     'validateContactformData': 'Enter valid studentEmail or contact number'

  //   }



  // };

  // formErrors = {


  //   'contact': '',

  // };

  // logValidationErrors(group: FormGroup = this.studentRegistrationform): void {
  //   Object.keys(group.controls).forEach((key: string) => {
  //     const abstractControl = group.get(key);
  //     this.formErrors[key] = '';
  //     // Loop through nested form groups and form controls to check
  //     // for validation errors. For the form groups and form controls
  //     // that have failed validation, retrieve the corresponding
  //     // validation message from validationMessages object and store
  //     // it in the formErrors object. The UI binds to the formErrors
  //     // object properties to display the validation errors.
  //     if (abstractControl && !abstractControl.valid
  //       && (abstractControl.touched || abstractControl.dirty)) {
  //       const messages = this.validationMessages[key];
  //       for (const errorKey in abstractControl.errors) {
  //         if (errorKey) {
  //           this.formErrors[key] += messages[errorKey] + ' ';
  //         }
  //       }
  //     }

  //     if (abstractControl instanceof FormGroup) {
  //       this.logValidationErrors(abstractControl);
  //     }
  //   });
  // }
}





