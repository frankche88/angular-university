import { Injectable } from '@angular/core';
import { STUDENTS } from './mock-students'
import { Student } from './student';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    this.messageService.add('StudentService: fetched students');
    return of(STUDENTS);
  }

}
