import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../app.employee.model';
import { EmployeeService} from '../employee.service';
@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
   // employees: Observable<Employee[]>;
    employees: Employee[];
  constructor(private  employeeService: EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(
      emp => {
        console.log(emp);
        this.employees = emp;
      }
    );
  }
  onUpdate(id: number): void {
    this.route.navigate(['/update', id]);
  }
  showDetail(id: number): void {
    this.route.navigate(['show', id]);
  }
  onDelete(id: number): void {
    this.employeeService.deleteEmployeeById(id).subscribe(
      data => {
        this.employeeService.getEmployeeList();
      }
    );
  }
}
