import { Component, OnInit } from '@angular/core';
import { TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { ITodo } from '../../core/models/todo.model';
import { TodoService } from '../../core/services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent implements OnInit {

  todos:ITodo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void{
    this.getAllTodos();
  }

  getAllTodos(){
    this.todos = this.todoService.getAllTodo();
  }

}
