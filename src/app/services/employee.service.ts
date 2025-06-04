import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PeriodicElement {
  id: number;
  name: string;
  department: string;
  email: string;
  phone: string;
  joiningDate: string;
}


let employees : PeriodicElement[] =  [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "department": "HR",
      "email": "aarav.sharma@example.com",
      "phone": "9876543210",
      "joiningDate": "2022-01-15"
    },
    {
      "id": 2,
      "name": "Diya Mehra",
      "department": "HR",
      "email": "diya.mehra@example.com",
      "phone": "9876543211",
      "joiningDate": "2021-07-10"
    },
    {
      "id": 3,
      "name": "Vivaan Patel",
      "department": "Engineering",
      "email": "vivaan.patel@example.com",
      "phone": "9876543212",
      "joiningDate": "2020-03-20"
    },
    {
      "id": 4,
      "name": "Anaya Reddy",
      "department": "Marketing",
      "email": "anaya.reddy@example.com",
      "phone": "9876543213",
      "joiningDate": "2021-11-05"
    },
    {
      "id": 5,
      "name": "Kabir Nair",
      "department": "Sales",
      "email": "kabir.nair@example.com",
      "phone": "9876543214",
      "joiningDate": "2023-04-12"
    },
    {
      "id": 6,
      "name": "Ishita Deshmukh",
      "department": "Legal",
      "email": "ishita.deshmukh@example.com",
      "phone": "9876543215",
      "joiningDate": "2019-09-01"
    },
    {
      "id": 7,
      "name": "Reyansh Gupta",
      "department": "IT",
      "email": "reyansh.gupta@example.com",
      "phone": "9876543216",
      "joiningDate": "2022-06-18"
    },
    {
      "id": 8,
      "name": "Myra Joshi",
      "department": "Operations",
      "email": "myra.joshi@example.com",
      "phone": "9876543217",
      "joiningDate": "2020-12-30"
    },
    {
      "id": 9,
      "name": "Ayaan Khan",
      "department": "Support",
      "email": "ayaan.khan@example.com",
      "phone": "9876543218",
      "joiningDate": "2023-08-22"
    },
    {
      "id": 10,
      "name": "Saanvi Pillai",
      "department": "Admin",
      "email": "saanvi.pillai@example.com",
      "phone": "9876543219",
      "joiningDate": "2021-05-09"
    }
  ]



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/employees'; 

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<PeriodicElement[]> {
    // return this.http.get<PeriodicElement[]>(this.apiUrl);
    return of(employees);
  }

  getEmployeeById(id: number): Observable<PeriodicElement> {
    // return this.http.get<PeriodicElement>(`${this.apiUrl}/${id}`);
    return of(employees.filter(emp => emp.id === id)[0]);
  }


  getUniqueDepartments(): Observable<string[]> {
    // return this.http.get<string[]>(`${this.apiUrl}/departments`);
    return of(Array.from(new Set(employees.map(emp => emp.department))));
  }
  
}
