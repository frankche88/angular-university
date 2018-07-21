import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  types: string[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getTypes();
  }

  getTypes(): void {

    this.types = ['all', 'PREGRADO','MAESTRIA','DOCTORADO'];
  }

}
