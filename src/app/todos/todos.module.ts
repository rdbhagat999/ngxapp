import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgVirtualScrollModule } from 'ag-virtual-scroll';

import { TodosComponent } from './todos.component';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  // { path: ':id', component: TodoComponent },
];

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [CommonModule, AgVirtualScrollModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosModule {}
