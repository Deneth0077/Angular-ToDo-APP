import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: 1,
      title: 'Buy milk',
      description: 'Test Description',
      status: 'OPEN',
    }
  ]

  constructor() { }
  getAllTodo() {
    return this.todos;
  }
}

