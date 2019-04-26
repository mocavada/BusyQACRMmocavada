import { StudentBatch } from './../aregister/pojo/studentBatch';

// import { StudentCourseType } from './../aregister/pojo/studentCourseType.component';
// import { HttpClient } from '@angular/common/http';
// import { StudentregistrationformService } from './../service/studentregistrationform.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ControlContainer, AbstractControl, NgForm } from '@angular/forms';
// import { StudentRecords } from '../aregister/pojo/StudentRecords.component';
// import { TouchSequence } from 'selenium-webdriver';

// @Component({
//   selector: 'app-aregister-update',
//   templateUrl: './aregister-update.component.html',
//   styleUrls: ['./aregister-update.component.css']
// })
// export class AregisterUpdateComponent implements OnInit {

//   s_id: number;
//   studentRecord: StudentRecords;
//   postthisRecord:StudentRecords;

//   studentUpdateRegistrationform: FormGroup;

//   updateErrorMessage: String;
//   errorFlag: boolean = false;
//   updateSuccessMessage: String;
//   successFlag: boolean = false;
//   statusTypes;
//   courseTypes;
//   batchTypes;
//   yearsList;
//   StatusValueflag: boolean;
//   statusform: any;
//   statusValue: any;
//   backToSearchFlag: boolean;

//   constructor(private activatedRoute: ActivatedRoute,
//               private studentService: StudentregistrationformService,
//               private fb: FormBuilder,
//               private http: HttpClient,
//               private router:Router) { }

//   ngOnInit() {

//     this.createForm();
//     this.getCourseList();
//     this.getStatusList();
//     this.getBatchList();
//     this.getYearsList();

//     this.StatusValueflag = false;
//     this.checkStatusformValue();

//     this.s_id = this.activatedRoute.snapshot.params['id'];
//     this.studentService.getStudentRecordbyId(this.s_id).subscribe(
//       response => {
//                     //  this.fname = response.firstName
//                     //  this.lname = response.lastName
//                     //  this.studentEmail = response.studentEmail
//                     //  this.contact = response.studentContact
//                     this.studentRecord = response
//                     // console.log(this.studentRecord)
//                     // console.log(response)
//                    // this.updateForm(this.studentRecord);
//                     this.firstName.setValue(this.studentRecord.firstName);
//                     this.lastName.setValue(this.studentRecord.lastName);
//                     this.studentEmail.setValue(this.studentRecord.studentEmail);
//                     this.studentContact.setValue(this.studentRecord.studentContact);
//                     //this.studentCourseType.setValue(this.studentRecord.studentCourseType.id);
//                     this.comments.setValue(this.studentRecord.comments);

//               }
//     );

//     this.backToSearchFlag = false;
//   }

//   createForm() {

//     this.studentUpdateRegistrationform = this.fb.group({

//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],

//       studentEmail: ['', [Validators.studentEmail]],
//       studentContact: ['', [ Validators.required, Validators.minLength(10) ]],


//       studentCourseType: this.fb.group({
//         id: [0, Validators.required]

//       }),

//       studentStatus: this.fb.group({
//         id: [0, [Validators.required]]

//       }),


//       studentBatch: this.fb.group({
//         id: [0]


//       }),

//       studentYear: this.fb.group({

//         id: [0]

//       }),

//       comments: ['']
//     });

//     this.StatusValueflag = false;

//   }


//   onSubmit() {

//     //this.studentRecord.id = this.s_id;
//     // this.studentRecord.firstName = this.studentUpdateRegistrationform.get('firstName').value;
//     // this.studentRecord.lastName = this.studentUpdateRegistrationform.get('lastName').value;
//     // this.studentRecord.studentEmail = this.studentUpdateRegistrationform.get('studentEmail').value;
//     // this.studentRecord.studentContact = this.studentUpdateRegistrationform.get('studentContact').value;
//     // this.studentRecord.studentCourseType.id = this.studentUpdateRegistrationform.get('studentCourseType').value;
//     // this.studentRecord.studentStatus.id = this.studentUpdateRegistrationform.get('studentStatus').value;
//     // this.studentRecord.studentBatch.id = this.studentUpdateRegistrationform.get('studentBatch').value;
//     // this.studentRecord.studentYear.id = this.studentUpdateRegistrationform.get('studentYear').value;
//     // this.studentRecord.comments = this.studentUpdateRegistrationform.get('comments').value;



//     //   console.log('---');
//     //console.log( this.studentUpdateRegistrationform.value);

//     //this.studentRecord = this.studentUpdateRegistrationform.value;
//     //console.log(this.studentRecord)
//     this.updateForm();
//     //console.log(this.studentCourseType.value);

//   }

//   updateForm() {

//     // this.postthisRecord = new StudentRecords(this.s_id, this.firstName.value, this.lastName.value, 
//     //   this.studentContact.value, this.studentEmail.value, this.studentCourseType.value, this.studentStatus.value,
//     //   this.studentBatch.value, this.studentYear.value, this.comments.value);

//       //console.log(this.postthisRecord)

//     this.studentService.updateData(this.s_id, this.studentUpdateRegistrationform.value).subscribe(
//       response => {
//          //console.log("Record has been updated")
//          this.updateSuccessMessage= "Record has been updated Succesfully!"
//          this.successFlag = true;
//          //console.log(studentRecord)
//       }, 
//       error => {
//         console.log(error)
//         this.errorFlag = true;
//         this.updateErrorMessage = "Unable to process your request. Please check all the fields are filled. Otherwise Please contact your administrator"
//       }
//     );

//     this.studentUpdateRegistrationform.disable();
//     this.backToSearchFlag = true;
//   }

//   onBacktoSearch(){


//     this.router.navigate(['/AsearchComponent']);
//   }

//   getCourseList() {


//     this.studentService.getCourseType().subscribe(
//       response => {
//         this.courseTypes = response
//       }
//     );
//   }

//   getStatusList() {

//     this.studentService.getStatusTypes().subscribe(
//       response => {
//           this.statusTypes = response
//           //console.log(response)
//       }
//     ); 
//   }

//   getBatchList() {

//     this.studentService.getBatchTypes().subscribe(
//       response => {
//         this.batchTypes = response


//       });
//   }

//   getYearsList() {

//     this.studentService.getYears().subscribe(
//       response => {
//         this.yearsList = response

//       });
//   }


//   get firstName() {
//     return this.studentUpdateRegistrationform.get('firstName') as FormControl;
//   }
//   get lastName() {
//     return this.studentUpdateRegistrationform.get('lastName') as FormControl;
//   }
//   get studentEmail(){
//     return this.studentUpdateRegistrationform.get('studentEmail') as FormControl;
//   }
//   get studentContact(){
//     return this.studentUpdateRegistrationform.get('studentContact') as FormControl;
//   }
//   get studentCourseType(){
//     return this.studentUpdateRegistrationform.get('studentCourseType') as FormControl;
//   }
//   get studentStatus(){
//     return this.studentUpdateRegistrationform.get('studentStatus') as FormControl;
//   }
//   get studentBatch(){
//     return this.studentUpdateRegistrationform.get('studentBatch') as FormControl;
//   }
//   get studentYear(){
//     return this.studentUpdateRegistrationform.get('studentYear') as FormControl;
//   }
//   get comments() {
//     return this.studentUpdateRegistrationform.get('comments') as FormControl;
//   }


//   //== listens to the value of the 'statusform' in order to dynamically show the year and batch dropdown
//   checkStatusformValue() {

//     this.studentUpdateRegistrationform.get('studentStatus.id').valueChanges.subscribe(
//       value => {
//         //console.log("Status Value: " + value);
//         if (value === '2' || value === '3')
//           this.StatusValueflag = true;
//         else {
//           this.StatusValueflag = false;
//           this.studentUpdateRegistrationform.get("studentBatch.id").setValue('');
//           this.studentUpdateRegistrationform.get("studentYear.id").setValue('');
//         }

//       })
//   }

// }


import { StudentCourseType } from './../aregister/pojo/studentCourseType.component';
import { HttpClient } from '@angular/common/http';
import { StudentregistrationformService } from './../service/studentregistrationform.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, ControlContainer, AbstractControl, NgForm } from '@angular/forms';
import { StudentRecords } from '../aregister/pojo/StudentRecords.component';


@Component({
  selector: 'app-aregister-update',
  templateUrl: './aregister-update.component.html',
  styleUrls: ['./aregister-update.component.css']
})
export class AregisterUpdateComponent implements OnInit {

  s_id: number;
  studentRecord: StudentRecords;
  postthisRecord: StudentRecords;

  studentUpdateRegistrationform: FormGroup;
  // fName;
  // lName;
  // studentEmail;
  // contact;
  updateErrorMessage: String;
  errorFlag: boolean = false;
  updateSuccessMessage: String;
  successFlag: boolean = false;
  statusTypes;
  courseTypes;
  batchTypes;
  yearsList;
  StatusValueflag: boolean;
  statusform: any;
  statusValue: any;
  backToSearchFlag: boolean;
  selectedCourseType;
  selectedStatus;
  selectedBatch;
  selectedYear;
  batch_id;
  year_id;

  constructor(private activatedRoute: ActivatedRoute,
    private studentService: StudentregistrationformService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router) {
  }

  ngOnInit() {


    this.createForm();
    this.getCourseList();
    this.getStatusList();
    this.getBatchList();
    this.getYearsList();

    this.StatusValueflag = false;
    // this.checkStatusformValue();


    this.s_id = this.activatedRoute.snapshot.params['id'];
    this.studentService.getStudentRecordbyId(this.s_id).subscribe(
      response => {

        this.studentRecord = response
       
        if(this.studentRecord.firstName == null){
          
            this.firstName.setValue(this.studentRecord.name)
          
        } else {
          this.firstName.setValue(this.studentRecord.firstName);
        }

        //this.name.setValue(this.studentRecord.name);
        this.remarks.setValue(this.studentRecord.remarks);
        // this.firstName.setValue(this.studentRecord.firstName);
        this.lastName.setValue(this.studentRecord.lastName);
        this.studentEmail.setValue(this.studentRecord.studentEmail);
        this.studentContact.setValue(this.studentRecord.studentContact);
        this.comments.setValue(this.studentRecord.comments);

        if (this.studentRecord.studentCourseType !== null && this.studentRecord.studentStatus !== null) {
          this.selectedCourseType = this.studentRecord.studentCourseType.id;
          this.studentCourseType.setValue(this.studentRecord.studentCourseType.id);

          this.selectedStatus = this.studentRecord.studentStatus.id;
          this.studentStatus.patchValue(this.studentRecord.studentStatus.id);

        }

        //this.checkStatusformValue();

        if (this.studentRecord.studentBatch !== null && this.studentRecord.studentYear !== null) {

          this.selectedBatch = this.studentRecord.studentBatch.id;
          this.studentBatch.setValue(this.studentRecord.studentBatch.id);

          this.selectedYear = this.studentRecord.studentYear.id;
          this.studentYear.setValue(this.studentRecord.studentYear.id);

        }

      }
    );

    this.studentUpdateRegistrationform.get('studentStatus.id').valueChanges.subscribe(
      value => {
        console.log("Status Value: " + value);
        
        if(value === '1'){

          // this.studentUpdateRegistrationform.get('studentBatch.id').setValue(null);
          // this.studentUpdateRegistrationform.get('studentYear.id').setValue(null);
          this.studentBatch.disable();
          this.studentYear.disable();

        }
        else if(value === '2'){

            this.studentBatch.enable();
            this.studentYear.enable();
            
          if(this.studentRecord.studentBatch !== null && this.studentRecord.studentYear !== null) {

            this.selectedBatch = this.studentRecord.studentBatch.id;
            //this.studentBatch.setValue(this.studentRecord.studentBatch.id);
  
            this.selectedYear = this.studentRecord.studentYear.id;
            //this.studentYear.setValue(this.studentRecord.studentYear.id);

          }
         
        }

        else if(value === '3'){

            this.studentBatch.enable();
            this.studentYear.enable();
            

          this.selectedBatch = this.studentRecord.studentBatch.id;
          //this.studentBatch.setValue(this.studentRecord.studentBatch.id);

          this.selectedYear = this.studentRecord.studentYear.id;
          //this.studentYear.setValue(this.studentRecord.studentYear.id);
        }
        });

    this.backToSearchFlag = false;

    //console.log(this.studentUpdateRegistrationform.value);

  }

  createForm() {

    this.studentUpdateRegistrationform = this.fb.group({

      name: [''],
      remarks: [''],

      firstName: ['', Validators.required],
      lastName: [''],

      //studentEmail: ['', Validators.studentEmail],
      studentContact: ['', [Validators.minLength(10)]],


      studentCourseType: this.fb.group({
        id: [0, Validators.required]

      }),

      studentStatus: this.fb.group({
        id: [0, [Validators.required]]

      }),


      studentBatch: this.fb.group({
        id: [0]


      }),

      studentYear: this.fb.group({

        id: [0]

      }),

      comments: ['']
    });

    //this.StatusValueflag = false;
  }

  onSubmit() {

    //this.studentRecord.id = this.s_id;
    // this.studentRecord.firstName = this.studentUpdateRegistrationform.get('firstName').value;
    // this.studentRecord.lastName = this.studentUpdateRegistrationform.get('lastName').value;
    // this.studentRecord.studentEmail = this.studentUpdateRegistrationform.get('studentEmail').value;
    // this.studentRecord.studentContact = this.studentUpdateRegistrationform.get('studentContact').value;
    // this.studentRecord.studentCourseType.id = this.studentUpdateRegistrationform.get('studentCourseType').value;
    // this.studentRecord.studentStatus.id = this.studentUpdateRegistrationform.get('studentStatus').value;
    // this.studentRecord.studentBatch.id = this.studentUpdateRegistrationform.get('studentBatch').value;
    // this.studentRecord.studentYear.id = this.studentUpdateRegistrationform.get('studentYear').value;
    // this.studentRecord.comments = this.studentUpdateRegistrationform.get('comments').value;



    //   console.log('---');
    //console.log( this.studentUpdateRegistrationform.value);

    //this.studentRecord = this.studentUpdateRegistrationform.value;
    //console.log(this.studentRecord)
    //this.checkStatusformValue();

    this.updateForm();
    //console.log(this.studentUpdateRegistrationform.value);

  }

  updateForm() {

    // this.postthisRecord = new StudentRecords(this.s_id, this.firstName.value, this.lastName.value, 
    //   this.studentContact.value, this.studentEmail.value, this.studentCourseType.value, this.studentStatus.value,
    //   this.studentBatch.value, this.studentYear.value, this.comments.value);

    //console.log(this.postthisRecord)
    // console.log("form value")

    console.log(this.studentUpdateRegistrationform.value);
    this.studentService.updateData(this.s_id, this.studentUpdateRegistrationform.value).subscribe(
      (response) => {
        //console.log(response)
        this.updateSuccessMessage = "Record has been updated Succesfully!"
        this.successFlag = true;
        //console.log(studentRecord)
      },
      error => {
        console.log(error)
        this.errorFlag = true;
        this.updateErrorMessage = "Unable to process your request. Please check all the fields are filled. Otherwise Please contact your administrator"
      }
    );

    this.studentUpdateRegistrationform.disable();
    this.backToSearchFlag = true;
  }

  onBacktoSearch() {


    this.router.navigate(['/AsearchComponent']);
  }

  getCourseList() {


    this.studentService.getCourseType().subscribe(
      response => {
        this.courseTypes = response
      }
    );
  }

  getStatusList() {

    this.studentService.getStatusTypes().subscribe(
      response => {
        this.statusTypes = response
        //console.log(response)
      }
    );
  }

  getBatchList() {

    this.studentService.getBatchTypes().subscribe(
      response => {
        this.batchTypes = response


      });
  }

  getYearsList() {

    this.studentService.getYears().subscribe(
      response => {
        this.yearsList = response

      });
  }

  get remarks() {
    return this.studentUpdateRegistrationform.get('remarks') as FormControl;
  }

  get name() {
    return this.studentUpdateRegistrationform.get('name') as FormControl;
  }

  get firstName() {
    return this.studentUpdateRegistrationform.get('firstName') as FormControl;
  }
  get lastName() {
    return this.studentUpdateRegistrationform.get('lastName') as FormControl;
  }
  get studentEmail() {
    return this.studentUpdateRegistrationform.get('studentEmail') as FormControl;
  }
  get studentContact() {
    return this.studentUpdateRegistrationform.get('studentContact') as FormControl;
  }
  get studentCourseType() {

    return this.studentUpdateRegistrationform.get('studentCourseType.id') as FormControl;

  }
  get studentStatus() {
    return this.studentUpdateRegistrationform.get('studentStatus.id') as FormControl;
  }
  get studentBatch() {
    return this.studentUpdateRegistrationform.get('studentBatch.id') as FormControl;
  }
  get studentYear() {
    return this.studentUpdateRegistrationform.get('studentYear.id') as FormControl;
  }
  get comments() {
    return this.studentUpdateRegistrationform.get('comments') as FormControl;
  }


  //== listens to the value of the 'statusform' in order to dynamically show the year and batch dropdown
  checkStatusformValue() {

    this.studentUpdateRegistrationform.get('studentStatus.id').valueChanges.subscribe(
      value => {
        console.log("Status Value: " + value);
        // if (value === '2' || value === '3')
        // {
      
        //     this.studentBatch.enable();
        //     this.studentYear.enable();
        // }

        //if (this.studentRecord.studentBatch !== null && this.studentRecord.studentYear !== null) {

        //   if (value === '2' || value === '3'){

        //     this.studentBatch.enable();
        //     this.studentYear.enable();
            

        //   this.selectedBatch = this.studentRecord.studentBatch.id;
        //   this.studentBatch.setValue(this.studentRecord.studentBatch.id);

        //   this.selectedYear = this.studentRecord.studentYear.id;
        //   this.studentYear.setValue(this.studentRecord.studentYear.id);



        // }
        if(value === '1'){

          this.studentUpdateRegistrationform.get('studentBatch.id').setValue(null);
          this.studentUpdateRegistrationform.get('studentYear.id').setValue(null);
          this.studentBatch.disable();
          this.studentYear.disable();

        }
        else if(value === '2'){

            this.studentBatch.enable();
            this.studentYear.enable();
            

          this.selectedBatch = this.studentRecord.studentBatch.id;
          this.studentBatch.setValue(this.studentRecord.studentBatch.id);

          this.selectedYear = this.studentRecord.studentYear.id;
          this.studentYear.setValue(this.studentRecord.studentYear.id);

        }

        else if(value === '3'){

           this.studentBatch.enable();
            this.studentYear.enable();
            

          this.selectedBatch = this.studentRecord.studentBatch.id;
          this.studentBatch.setValue(this.studentRecord.studentBatch.id);

          this.selectedYear = this.studentRecord.studentYear.id;
          this.studentYear.setValue(this.studentRecord.studentYear.id);

        }

        // else {
        //   this.StatusValueflag = false;
        //   this.studentBatch.setValue(null);
        //   this.studentYear.setValue(null);
        //   this.studentBatch.disable();
        //   this.studentYear.disable();
        //   // this.studentUpdateRegistrationform.get("studentBatch.id").setValue('');
        //   // this.studentUpdateRegistrationform.get("studentYear.id").setValue('');

        //   // this.studentBatch.setValue(null);
        //   // this.studentYear.setValue(null);
        // }

        // if (value === 1) {

        //   this.StatusValueflag = false;
        //   this.studentUpdateRegistrationform.get('studentBatch.id').setValue(null);
        //   this.studentUpdateRegistrationform.get('studentYear.id').setValue(null);
        //   this.studentBatch.disable();
        //   this.studentYear.disable();

        // } else {

        //   this.StatusValueflag = true;
        //   this.studentBatch.enable();
        //   this.studentYear.enable();

        // }




      });
  }

}