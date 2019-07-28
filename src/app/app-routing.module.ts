import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { TaskSaveComponent } from './components/task/task-save/task-save.component';
import { TaskViewComponent } from './components/task/task-view/task-view.component';
import { ProjectSaveComponent } from './components/project/project-save/project-save.component';
import { UserSaveComponent } from './components/user/user-save/user-save.component';


const routes: Routes = [
  { path: 'addProject', component: ProjectSaveComponent },
  { path: 'addTask', component: TaskSaveComponent },
  { path: 'addUser', component: UserSaveComponent },
  { path: 'viewTask', component: TaskViewComponent }];

  @NgModule({
    declarations: [],
    imports: [
      CommonModule,RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ] 
  })
export class AppRoutingModule { }
