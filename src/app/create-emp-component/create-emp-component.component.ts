import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../app.employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-emp-component',
  templateUrl: './create-emp-component.component.html',
  styleUrls: ['./create-emp-component.component.css']
})
export class CreateEmpComponentComponent implements OnInit {
addEmployeeForm: FormGroup;
employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private routes: Router) { }

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup(
      {name: new FormControl(null),
      address: new FormGroup({
      city: new FormControl(null),
      state: new FormControl(null),
      street: new FormControl(null)
      })
  });
  }
  onSubmit(): void{
    console.log(this.addEmployeeForm.value);
    this.employeeService.saveEmployee(this.addEmployeeForm.value).subscribe();
    this.routes.navigate(['']);

  }

}
