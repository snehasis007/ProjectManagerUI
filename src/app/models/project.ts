import { User } from './user';

export class Project{
    id:string;
    startDate?:string;
    endDate?:string;
    project:string;
    priority?:string;
    isSuspended?:string;
    noOfTask?:number;
    noOfTaskCompleted?:number;
    manager?:User;
}