import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EmployeeService } from '../../services/employee.service';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
export interface PeriodicElement {
  name: string;
  id: number;
  department: string;
  email: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,RouterModule,MatToolbarModule, MatIconModule, MatSelectModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {


  displayedColumns: string[] = ['id', 'name', 'department', 'email', 'details'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  

  selectedDepartment: string = '';
  departments: string[] = [];


  constructor(private router: Router, private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeesList();
    this.getUniqueDepartments();
  }

  getEmployeesList(){
    this.employeeService.getEmployees().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getUniqueDepartments() {
    this.employeeService.getUniqueDepartments().subscribe(departments => {
      this.departments = departments;
      this.departments.unshift('All');
    });
  }

  filterDeptPersons(arg0: any) {
    console.log(arg0);
    
    this.employeeService.getEmployees().subscribe(data => {

      if(arg0 === 'All'){
        this.dataSource.data = data;
        return;
      }
      data = data.filter((item: any) => {
        return item.department.toString().toLowerCase() === arg0.toString().toLowerCase();
      });
      this.dataSource.data = data;
    });

}


  goToDetails(id: number) {
    console.log(id);
    this.router.navigate(['/employees', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
