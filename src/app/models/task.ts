import { ParentTask } from './parent-task';
import { User } from './user';
import { Project } from './project';

export class Task{
    id:string;
    pTask?:ParentTask;
    task:string;
    startDate?:string;
    endDate?:string;
    priority?:number;
    isTaskCompleted?:string='N';
    isParent:string;
    userOwner:User;
    project:Project;
    projectID:string;
    constructor(){
        this.pTask=new ParentTask();
        this.userOwner=new User();
        this.project=new Project();
    }
}