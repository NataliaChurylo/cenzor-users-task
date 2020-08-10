import { IUser } from './../interfaces/users-list.interface';

export class User implements IUser{
    constructor(
        public id:number,
        public login: string,
        public password: string,
        public email: string,
    ){}
}