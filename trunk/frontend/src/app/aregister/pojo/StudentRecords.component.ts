import { StudentYear } from './studentYear.component';
import { StudentBatch } from './studentBatch';
import { StudentStatus } from './studentStatus.component';
import { StudentCourseType } from './studentCourseType.component';

export class StudentRecords {

    public id: number;
    public firstName: string;
    public lastName: string;
    public studentEmail: string
    public studentContact: string;
    public studentCourseType: StudentCourseType;
    public studentStatus: StudentStatus;
    public studentBatch: StudentBatch;
    public studentYear: StudentYear;
    public comments: String;

    public name: string;
    //public studentEmail: string;
    //public phoneNumber: string;
    public remarks: string;
    public course: string;

    // constructor(id, firstName, lastName, studentEmail, studentContact, studentCourseType, studentStatus, studentBatch
    //     , studentYear, comments  ) {}

   

}
