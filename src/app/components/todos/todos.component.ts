import { Component, OnInit } from '@angular/core';

//* Importing Service
import { TodoService } from 'src/app/service/todo.service';

// * Importing Model
import { Todo } from '../../model/Todo';

//* Importing External Files for Icons
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todos: Todo[];

  constructor(private todoservice: TodoService) {}

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  changeTodoStatus(todo: Todo) {
    this.todoservice.changeStatus(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoservice.deleteTodo(todo);
  }
}
