import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-list/employee-detail/employee-detail.component';

export const routes: Routes = [
   {
    path: '',
    component: EmployeeListComponent
  },
   {
    path: 'employees/:id',
    component: EmployeeDetailComponent,
  }
];


