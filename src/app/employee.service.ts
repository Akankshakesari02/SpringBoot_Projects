import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './app.employee.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseurl = 'http://localhost:2001/';
  constructor(private http: HttpClient) { }

  getEmployeeList(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  saveEmployee(emp: Employee): Observable<any> {
  console.log(emp);
  console.log(`${this.baseurl}save`);
  return this.http.post(`${this.baseurl}save`, emp);
  }

  updateEmployee(id: number, employee: Employee): Observable<any>
  {
    return this.http.put(`${this.baseurl}update/${id}`, employee);
  }
  getEmployeeById(empId: number): Observable<any> {
    console.log(`${this.baseurl}emp/${empId}`);
    return this.http.get(`${this.baseurl}emp/${empId}`);
  }
  deleteEmployeeById(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}delete/${id}`);
  }
}
