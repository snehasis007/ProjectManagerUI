import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Manager';
  constructor(private projectService:ProjectService){
    this.projectService.getAllTasks();
  }
}
