import { ITodoType } from '../../shared/components/todo-card/todo-card.component';

export interface ITodo{
  id?:number;
  title:String;
  description:string;
  status:ITodoType;
  created_at?:string;
  updated_at?:string
}
