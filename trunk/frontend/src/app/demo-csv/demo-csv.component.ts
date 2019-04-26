import { StudentRecords } from './../aregister/pojo/StudentRecords.component';
import { StudentregistrationformService } from './../service/studentregistrationform.service';
import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { Student } from './student';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConstantPool } from '@angular/compiler/src/constant_pool';
//import { CSVData } from './CSVData';

@Component({
  selector: 'app-demo-csv',
  templateUrl: './demo-csv.component.html',
  styleUrls: ['./demo-csv.component.css']
})
export class DemoCsvComponent implements OnInit {

  csvFile: File;
  csvFileData: StudentRecords[];
  tableflag: boolean;
  searchString: string = "";
  phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


  ngOnInit() {

    this.tableflag = false;
    
  }
  constructor(private papa: Papa, private http: HttpClient,
    private studentService: StudentregistrationformService) {


    // let csvData = '"Hello","World!"';
    // let options = {
    //   complete: (results, file) => {
    //     console.log('Parsed: ', results, file);
    //   }
    // };

  }

  // onFileChanged(event) {
  //   //    this.selectedFile = event.target.files[0];


  //   let fileCSV = (event.target.files)[0]; // FileList object
  //   this.papa.parse(fileCSV, {
  //     header: true,
  //     complete: (results) => {
  //       var students:Student[] = new Array(); 

  //       for (const iterator of results.data) {
  //                 var student = new Student;
  //                 student.id = iterator['id'];
  //                 student.address =  iterator['address'];
  //                 student.studentEmail =  iterator['studentEmail'];
  //                 student.firstName = iterator['first_name'];
  //                 student.lastName =  iterator['last_name'];
  //                 student.password =  iterator['password'];
  //                 student.phone =  iterator['phone'];
  //                 student.phone2=  iterator['phone2'];
  //                 student.userName =  iterator['user_name'];
  //                 student.comments=  iterator['comments'];
  //                student.status =  iterator['status'];

  //                 console.log('Parsed: ', iterator);
  //                 students[students.length] = student;
  //       }
  //       console.log('Parsed: ', results.data);
  //       console.log('Parsed: ', students);

  //       this.postData(students);
  //     }
  //   });

  // }

  onFileChanged(event) {


    this.csvFile = (event.target.files)[0];
    this.papa.parse(this.csvFile, {
      header: true,
      complete: (results) => {
        var students: StudentRecords[] = new Array();

        for (const iterator of results.data) {

          var student = new StudentRecords;
          //student.id = iterator['id'];
          student.name = iterator['name'];
          student.comments = iterator['comments'];
          student.studentEmail = iterator['studentEmail'];
          student.studentContact = iterator['studentContact'];
          student.remarks = iterator['remarks'];
          student.course = iterator['course'];

          students[students.length] = student;
        }

       console.log(results.data)
        students = results.data;
        this.csvFileData = results.data;
        
        this.postData(students);

      }
    });

  }


  postData(students) {

    //console.log("students")
    //console.log(students)

    this.tableflag = true;
    this.studentService.uploadCSVfile(students).subscribe(
      response => {
        //console.log(students)
        console.log('data has been submitted')
        console.log(response);

      }

    );
  }

//   onSearch() {

//     this.tableflag = true;
//     console.log(this.searchString)
    
// if(this.searchString.includes("@")){

//   this.studentService.SearchCSVDatabyEmail(this.searchString).subscribe(
//     response => {
//                   this.csvFileData = response;
//                   console.log(response)
//     }
//   );
// }
// if(this.searchString.match(this.phoneRegex)){

//   this.studentService.SearchCSVDatabyPhoneNumber(this.searchString).subscribe(
//     response => {
//       console.log(response)
//       this.csvFileData = response;
//     }
//   )
// }

// else {

//   this.studentService.SearchCSVDatabyName(this.searchString)
//       .subscribe(data => {
//         console.log(data)
//         this.csvFileData = data;
//         console.log(this.csvFileData)
      
//       });
//     }
    
//   }

}
