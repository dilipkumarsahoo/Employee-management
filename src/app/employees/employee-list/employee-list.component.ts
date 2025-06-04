import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface PeriodicElement {
  name: string;
  position: number;
  department: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {"position": 1, "name": "Aarav Sharma", "department": "HR", "email": "aarav.sharma@example.com"},
  {"position": 2, "name": "Diya Mehra", "department": "Finance", "email": "diya.mehra@example.com"},
  {"position": 3, "name": "Vivaan Patel", "department": "Engineering", "email": "vivaan.patel@example.com"},
  {"position": 4, "name": "Anaya Reddy", "department": "Marketing", "email": "anaya.reddy@example.com"},
  {"position": 5, "name": "Kabir Nair", "department": "Sales", "email": "kabir.nair@example.com"},
  {"position": 6, "name": "Ishita Deshmukh", "department": "Legal", "email": "ishita.deshmukh@example.com"},
  {"position": 7, "name": "Reyansh Gupta", "department": "IT", "email": "reyansh.gupta@example.com"},
  {"position": 8, "name": "Myra Joshi", "department": "Operations", "email": "myra.joshi@example.com"},
  {"position": 9, "name": "Ayaan Khan", "department": "Support", "email": "ayaan.khan@example.com"},
  {"position": 10, "name": "Saanvi Pillai", "department": "Admin", "email": "saanvi.pillai@example.com"}
];

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['position', 'name', 'department', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
