import {Injectable} from '@angular/core';
@Injectable()
export class ProjectConsts{
    public static PROXY_PATH:string='/api';
    public static host:string= window.location.origin.toString();
    public static VIEWALL_TASK_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/getalltasks';
    public static VIEWALL_USER_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/getallusers';
    public static VIEWALL_PROJECT_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/getallprojects';
    public static ADD_TASK_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/savetask';
    public static ADD_USER_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/saveuser';
    public static ADD_PROJECT_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/saveproject';
    public static REMOVE_USER_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/removeuser';
    public static VIEWALL_PARENT_TASK_URL:string=ProjectConsts.PROXY_PATH+'/projectmanager/services/projectservice/getallparenttasks';
//For Prod
    // public static VIEWALL_TASK_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/getalltasks';
    // public static VIEWALL_USER_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/getallusers';
    // public static VIEWALL_PROJECT_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/getallprojects';
    // public static ADD_TASK_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/savetask';
    // public static ADD_USER_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/saveuser';
    // public static ADD_PROJECT_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/saveproject';
    // public static REMOVE_USER_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/removeuser';
    // public static VIEWALL_PARENT_TASK_URL:string=ProjectConsts.host+'/projectmanager/services/projectservice/getallparenttasks';
   

}