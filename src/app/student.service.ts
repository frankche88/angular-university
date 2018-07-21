import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { STUDENTS } from './mock-students'
import { Student } from './student';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'api/alumnos';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    this.messageService.add('StudentService: fetched students');
    return this.http.get<Student[]>(this.studentsUrl)
  }

  getStudent(id: number): Observable<Student> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(STUDENTS.find(student => student.id === id));
  }

  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

}
