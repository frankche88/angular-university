import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

import { Student } from './student';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentsUrl = 'http://localhost:8080/api/alumnos';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getStudents(type: string): Observable<Student[]> {
    let url = this.studentsUrl;
    if(type && type !== 'all') {
      url = this.studentsUrl + "/" + type;
    }
    this.messageService.add('StudentService: fetched students');
    return this.http.get<Student[]>(url)
  }

  getStudent(id: string): Observable<Student> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`StudentService: fetched student id=${id}`);

    return this.getStudents('all').pipe(
      map(students => students.find(student => student.id === id))
    );

    //return of(STUDENTS.find(student => student.id === id));
  }

  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

}
