import {Injectable} from '@angular/core';
@Injectable()
export class ProjectConsts{
    public static PROXY_PATH:string='/api';
    public static host:string= window.location.origin.toString();
    public static VIEWALL_TASK_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/taskservice/getalltasks';
    public static ADD_TASK_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/taskservice/savetask';
    public static REMOVE_TASK_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/taskservice/removetask';
    public static VIEW_TASK_BYPARENT_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/taskservice/taskbyparent';
    public static VIEWALL_PARENT_TASK_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/taskservice/getallparenttasks';

   //For Prod
//    public static VIEWALL_TASK_URL:string=TaskConsts.host+'/taskmanager/services/taskservice/getalltasks';
//    public static ADD_TASK_URL:string=TaskConsts.host+'/taskmanager/services/taskservice/savetask';
//    public static REMOVE_TASK_URL:string=TaskConsts.host+'/taskmanager/services/taskservice/removetask';
//    public static VIEW_TASK_BYPARENT_URL:string=TaskConsts.host+'/taskmanager/services/taskservice/taskbyparent';
//    public static VIEWALL_PARENT_TASK_URL:string=TaskConsts.host+'/taskmanager/services/taskservice/getallparenttasks';
}