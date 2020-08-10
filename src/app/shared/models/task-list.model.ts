import { ITask } from './../interfaces/task-list.intarface'

export class Task implements ITask{
    constructor(
        public id:number,
        public name:string,
        public taskCheck:boolean
    ){}
}