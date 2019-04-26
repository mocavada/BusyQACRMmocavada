//import { CSVData } from '../demo-csv/CSVData';
import { StudentRecords } from './../aregister/pojo/StudentRecords.component';
import { FormGroup } from '@angular/forms';
import { StudentYear } from './../aregister/pojo/studentYear.component';
import { StudentCourseType } from './../aregister/pojo/studentCourseType.component';
import { StudentStatus } from '../aregister/pojo/studentStatus.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { CourseType } from '../aregister/pojo/studentCourseType.component';
import { BehaviorSubject } from 'rxjs';
import { StudentBatch } from '../aregister/pojo/studentBatch';
import { Student } from '../demo-csv/student';


@Injectable({
  providedIn: 'root'
})
export class StudentregistrationformService {

  courseTypeList = new BehaviorSubject<[StudentCourseType]>(null);
  statusTypeList = new BehaviorSubject<[StudentStatus]>(null);
  batchTypesList = new BehaviorSubject<[StudentBatch]>(null);
  yearList = new BehaviorSubject<[StudentYear]>(null);
  studentData = new BehaviorSubject<[StudentRecords]>(null);

  constructor(private http: HttpClient) { }


  pullCourseTypeList(courseTypeList: [StudentCourseType]) {
    this.courseTypeList.next(courseTypeList);
  }

  pullStatusList(statusTypeList: [StudentStatus]) {
    this.statusTypeList.next(statusTypeList);
  }
  pullBatchList(batchTypesList: [StudentBatch]){
    this.batchTypesList.next(batchTypesList);
  }

  pullYearsList(yearList: [StudentYear]){
    this.yearList.next(yearList);
  }

  getCourseType() {

    // return this.http
    //     .get<[StudentCourseType]>(`http://localhost:8080/course`).subscribe(
    //      data => {
    //        this.pullCourseTypeList(data)
    //        console.log("CourseTypes: " + data)
    //      }
    //    );
    return this.http.get<[StudentCourseType[]]>(`http://localhost:8080/courseType`);
  }

  getStatusTypes() {

    return this.http
     .get<[StudentStatus[]]>(`http://localhost:8080/studentstatus`);

    // return this.http
    // .get<[StudentStatus]>(`http://localhost:8080/studentstatus`).subscribe(
    //   data => {
    //     this.pullStatusList(data)  
        
    //   }
    // );
    
  }

  getBatchTypes() {

    // return this.http.
    // get<[StudentBatch>(`http://localhost:8080/studentbatch`).subscribe(
    //   data => this.pullBatchList(data)
    // );

    return this.http.get<[StudentBatch[]]>(`http://localhost:8080/studentbatch`);
  }

  getYears(){

    // return this.http.
    // get<[StudentYear>(`http://localhost:8080/list_years`).subscribe(
    //   data => {
    //     this.pullYearsList(data)
    //     //console.log(data);

    //   } 
    // );

    return this.http.get<[StudentYear[]]>(`http://localhost:8080/list_years`);
  }

postData(studentRecords: StudentRecords) {


    //return this.http.post<[StudentRecords]>(`http://localhost:8080/registerstudent`, studentRecords);
    return this.http
               .post<[StudentRecords]>(`http://localhost:8080/registerstudent`, studentRecords);
   
}

updateData(s_id, studentRecord) {

  return this.http
             .put<StudentRecords>(`http://localhost:8080/update/student/${s_id}`, studentRecord);
}

getStudentRecordbyId(id) {

  return this.http
             .get<StudentRecords>(`http://localhost:8080/student/id/${id}`);
    }

    deleteStudentRecord(id) {

      return this.http
          .delete<StudentRecords>(`http://localhost:8080/student/id/${id}`);
    }

    searchStudentRecordUsingEmailAddress(term){

      return this.http
          .get<StudentRecords[]>("http://localhost:8080/studentRecord/byEmail?studentEmail="+term);
         
    }

    

    uploadCSVfile(students){

    // console.log(students)
      return this.http
                    .post<StudentRecords[]>(`http://localhost:8080/csvData`, students);
    }

    SearchCSVDatabyName(searchString) {

      ////get<any>("http://127.0.0.1:8080/student?firstName="+term)
     // return this.http
       //          .get<CSVData[]>("http://localhost:8080/csvData?name="+searchString);
    }

    // SearchCSVDatabyEmail(seachString) {

    //   return this.http
    //              .get<CSVData[]>("http://localhost:8080/csvData/byEmail?studentEmail="+seachString);
    // }

    SearchStudentDataUsingPhoneNumber(term) {

      return this.http
                 .get<StudentRecords[]>("http://localhost:8080/studentRecord/byPhone?studentContact="+term);
    }

    SearchStudentDataUsingCourseTypeOrCourse(term){

      return this.http
                 .get<StudentRecords[]>("http://localhost:8080/studentRecord/byCourseTypeOrCourse?courseType="+term+"&course="+term);
    }

    SearchStudentDataUsingEmailOrPhoneNumber(studentEmail, studentContact){


      return this.http
                 .get<StudentRecords[]>("http://localhost:8080/studentRecord/byEmailOrPhone?studentEmail="+studentEmail+"&studentContact="+studentContact);
    }

    SearchStudentDataUsingfirstNameOrName(term){

      return this.http
                 .get<StudentRecords[]>("http://localhost:8080/studentRecord/byfirstNameOrname?firstName="+term+"&name="+term);

    }




  
}
