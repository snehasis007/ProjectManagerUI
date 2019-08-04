import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Task } from 'src/app/models/task';
import { ParentTask } from 'src/app/models/parent-task';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-task-save',
  templateUrl: './task-save.component.html',
  styleUrls: ['./task-save.component.css']
})
export class TaskSaveComponent implements OnInit {
  task: Task;
  v:Array<string>;
  parentTask: ParentTask;
  parentTasks: ParentTask[];
  user: User;
  project: Project;
  projects: Project[];
  users: User[];
  filteredProjects: Project[];
  
  filteredUsers: User[];
  filteredParentTasks: ParentTask[];
  

  
  parentTaskModalRef: BsModalRef;
  projectModalRef: BsModalRef;
  userModalRef: BsModalRef;
  private _projectSearchValue: string = "";
  private _parentTaskSearchValue: string = "";
  private _userSearchValue: string = "";
  private isParentSelected:boolean=true;
  index: number;
  errorMsg: String;

  
    

  constructor(private modalService: BsModalService, private taskService: ProjectService) { 
    this.task = new Task();
    this.task.isParent = 'Y';
    this.task.priority = 0;
  //  this.task.pTask = new ParentTask();
   
  }

  ngOnInit() {
  }

  set projectSearchValue(value: string) {
    this._projectSearchValue = value;
    this.filteredProjects = this.projectSearchValue ? this.performProjectFilter(this.projectSearchValue) : this.projects;
  }

  get projectSearchValue(): string {
    return this._projectSearchValue;
  }

  set parentTaskSearchValue(value: string) {
    this._parentTaskSearchValue = value;
    this.filteredParentTasks = this.parentTaskSearchValue ? this.performParentTaskFilter(this.parentTaskSearchValue) : this.parentTasks;
  }

  get parentTaskSearchValue(): string {
    return this._parentTaskSearchValue;
  }
  public set userSearchValue(value: string) {
    this._userSearchValue = value;
    this.filteredUsers = this.userSearchValue ? this.performUserFilter(this.userSearchValue) : this.users;
  }

  public get userSearchValue(): string {
    return this._userSearchValue;
  }

  saveOrUpdateTask(): any { 
    if(this.isParentSelected){
      this.task.pTask.parentTaskName=this.task.task;
    }   
    this.taskService.saveTask(this.task).subscribe((response: any) => {
      this.reset();
    },
      error => this.errorMsg = <any>error
    );
  }
  getParentTasks(): any {
    let obs = this.taskService.getAllParentTasks();
    obs.subscribe((response: any) => {
      this.parentTasks = response ? response.dataList : null;
      this.filteredParentTasks = response ? response.dataList : null;
    },
      error => this.errorMsg = <any>error
    );
  }

  getUsers(): any {
    let obs = this.taskService.getAllUsers();
    obs.subscribe((response: any) => {
      this.users = response ? response.dataList : null;
      this.filteredUsers = response ? response.dataList : null;
    },
      error => this.errorMsg = <any>error
    );
  }

  getProjects(): any {
    let obs = this.taskService.getAllProjects();
    obs.subscribe((response: any) => {
      this.projects = response ? response.dataList : null;
      this.filteredProjects = response ? response.dataList : null;
    },
      error => this.errorMsg = <any>error
    );
  }

  performProjectFilter(filterValue: string): Project[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.projects.filter((project: Project) => project.project.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  performParentTaskFilter(filterValue: string): ParentTask[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.parentTasks.filter((parentTask: ParentTask) => parentTask.parentTaskName.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  performUserFilter(filterValue: string): User[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.users.filter((user: User) => user.firstName.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  openProjectModal(template: TemplateRef<any>): void {
    this.getProjects();
    this.projectModalRef = this.modalService.show(template);
  }

  closeProjectModal(): void {
    this.projectModalRef.hide();
  }

  selectProject(i: number): void {
    this.task.project = this.filteredProjects[i];    
    this.closeProjectModal();
  }
  openParentTaskModal(template: TemplateRef<any>): void {
    this.getParentTasks();
    this.parentTaskModalRef = this.modalService.show(template);
  }

  closeParentTaskModal(): void {
    this.parentTaskModalRef.hide();
  }

  selectParentTask(i: number): void {
    this.task.pTask = this.filteredParentTasks[i];
    this.closeParentTaskModal();
  }
  selectUser(i: number): void {
    let user = this.filteredUsers[i];
    this.task.userOwner = user;
    this.task.userOwner.fullName = user.firstName + " " + user.lastName;
    this.closeUserModal();
  }
  onChecboxSelect(event: any): void {
    this.task.isParent = 'N';
    this.isParentSelected=false;
    if (event.target.checked) {
      this.task.isParent = 'Y';
      this.task.pTask.parentTaskName = null;
      this.isParentSelected=true;
    }
  }

  openUserModal(template: TemplateRef<any>): void {
    this.getUsers();
    this.userModalRef = this.modalService.show(template);
  }

  closeUserModal() {
    this.userModalRef.hide();
  }
  
  
  onDrag(event: any): void {
    this.task.priority = event.target.value;
  }

  reset(): void {
    
    this.task=new Task();
  }

  validateDate(): boolean {
    let startDateStr = this.task.startDate;
    let endDateStr = this.task.endDate;
    let startDate: Date = new Date(startDateStr);
    let endDate: Date = new Date(endDateStr);
    let flag: boolean = false;
    if (endDate.getTime() >= startDate.getTime()) {
      flag = true;
    }
    return flag;
  }

}
