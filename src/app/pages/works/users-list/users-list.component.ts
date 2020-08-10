import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../shared/interfaces/users-list.interface';
import { User } from './../../../shared/models/users-list.model'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  isAdd = true;
  isEdit = false;
  usersArray:Array<IUser> = [];
  userLogin: string;
  userPass:string;
  userEmail:string;
  userID:number;

  constructor() { }

  ngOnInit(): void {
  }

  createUser():void{
    const newUser: IUser = new User(0, this.userLogin, this.userPass, this.userEmail);
    if( this.usersArray.length > 0 ) {
      newUser.id = this.usersArray.slice(-1)[0].id +1;
    }
    this.usersArray.push(newUser);
    this.userLogin = '';
    this.userPass = '';
    this.userEmail = '';
  }

  editUser(user:IUser, id:number ):void{
    this.isAdd = false;
    this.isEdit = true;
    this.userID = id;
    this.userLogin = user.login;
    this.userPass = user.password;
    this.userEmail = user.email

  }

  saveUser():void{
    this.usersArray[this.userID].login = this.userLogin;
    this.usersArray[this.userID].password = this.userPass;
    this.usersArray[this.userID].email = this.userEmail;
    this.userLogin = '';
    this.userPass = '';
    this.userEmail = '';
    this.isAdd = true;
    this.isEdit = false;
  }

  deleteUser(id:number):void{
    this.usersArray.splice(id,1);
  }
}
