import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EmployeeService, PeriodicElement } from '../../../services/employee.service';
@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,RouterModule,MatToolbarModule,MatCardModule,MatButtonModule,DatePipe],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent {

  employeeId: number = 0;
  employee: PeriodicElement | null = null;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeDetails()
  }

  getEmployeeDetails() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.employeeId = +idParam;

      this.employeeService.getEmployeeById(this.employeeId).subscribe({
        next: (data) => {
          this.employee = data;
        },
        error: (err) => {
          console.error('Failed to fetch employee', err);
        }
      });
    }
  }
}
