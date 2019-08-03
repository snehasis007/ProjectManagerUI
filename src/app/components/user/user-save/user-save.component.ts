import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal/public_api';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.css']
})
export class UserSaveComponent implements OnInit {

  user: User;
  users: User[];
  filteredUsers: User[];

  modalRef: BsModalRef;
  index: number;
  errorMsg: String;

  private _userSearchValue: string = "";

  constructor(private modalService: BsModalService, private projectService: ProjectService) {
    this.user = new User();

  }

  ngOnInit() {
    this.getUsers();
  }

  saveOrUpdateUser(): any {
    
    this.projectService.saveUser(this.user).subscribe((response: any) => {
      //this.filteredUsers.push(this.user);
      this.getUsers();
      this.reset();

    },
      error => this.errorMsg = <any>error
    );



  }

  updateUser(i: number): void {
    this.projectService.saveUser(this.filteredUsers[i]).subscribe((response: any) => {
      this.closeUserModal();
    },
      error => this.errorMsg = <any>error
    );

  }

  deleteUser(i: number): void {   
    
    this.projectService.removeUser(this.filteredUsers[i]).subscribe((response: any) => {
      this.getUsers();
    },
      error => this.errorMsg = <any>error
    );
  }

  getUsers(): any {
    let obs = this.projectService.getAllUsers();
    obs.subscribe((response: any) => {
      this.users = response ? response.dataList : null;
      this.filteredUsers = response ? response.dataList : null;
    },
      error => this.errorMsg = <any>error
    );
  }

  public set userSearchValue(value: string) {
    this._userSearchValue = value;
    this.filteredUsers = this.userSearchValue ? this.performUserFilter(this.userSearchValue) : this.users;
  }
  public get userSearchValue(): string {
    return this._userSearchValue;
  }

  performUserFilter(filterValue: string): User[] {
    filterValue = filterValue.toLocaleLowerCase();
    return this.users.filter((user: User) => user.firstName.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  openUserMdal(template: TemplateRef<any>, i: number): void {
    this.index = i;
    this.modalRef = this.modalService.show(template);
  }

  closeUserModal() {
    this.getUsers();
    this.modalRef.hide();
  }

  sortByFirstName(): void {
    this.filteredUsers.sort((a: User, b: User) => {
      let value1: string = a.firstName.toLocaleLowerCase();
      let value2: string = b.firstName.toLocaleLowerCase();
      return value1.localeCompare(value2);
    });
  }

  sortByLastName(): void {
    this.filteredUsers.sort((a: User, b: User) => {
      let value1: string = a.lastName.toLocaleLowerCase();
      let value2: string = b.lastName.toLocaleLowerCase();
      return value1.localeCompare(value2);
    });
  }

  sortById(): void {
    this.filteredUsers.sort((a: User, b: User) => {
      let value1: string = a.employeeID.toLocaleLowerCase();
      let value2: string = b.employeeID.toLocaleLowerCase();
      return value1.localeCompare(value2);
    });
  }

  selectUser(i: number): void {

    this.modalRef.hide();
  }

  reset(): void {
    this.user.firstName = "";
    this.user.id = "";
    this.user.lastName = "";
    this.user.employeeID = "";
  }

}
