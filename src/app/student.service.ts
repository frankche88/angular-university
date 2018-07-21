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

  getStudent(id: number): Observable<Student> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(STUDENTS.find(student => student.id === id));
  }

}
