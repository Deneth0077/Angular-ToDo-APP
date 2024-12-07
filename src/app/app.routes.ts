import { Routes } from '@angular/router';
import { DefaultsComponent } from './shared/layouts/defaults/defaults.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultsComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: '',
    component: MasterComponent,
    children: [{ path: 'todo', component: TodoComponent }],
  },
];
