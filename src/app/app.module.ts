import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { TaskSaveComponent } from './components/task/task-save/task-save.component';
import { TaskViewComponent } from './components/task/task-view/task-view.component';
import { ProjectSaveComponent } from './components/project/project-save/project-save.component';
import { UserSaveComponent } from './components/user/user-save/user-save.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskSaveComponent,
    TaskViewComponent,
    ProjectSaveComponent,
    UserSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   // BrowserAnimationsModule,
    //BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
