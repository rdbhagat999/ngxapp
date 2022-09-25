import { Component, inject, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { ITodo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent extends BaseComponent implements OnInit {
  todoService: TodoService = inject(TodoService);

  todoList: ITodo[] = [];

  constructor() {
    super();
    this.addSafeSubscriber(
      this.todoService.getTodos().subscribe((todos: ITodo[]) => {
        this.todoList = todos;
      })
    );
  }

  ngOnInit(): void {}

  trackByFn(index: number, todo: ITodo) {
    return todo?.id;
  }
}
