import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/app.employee.model';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-emp-component',
  templateUrl: './update-emp-component.component.html',
  styleUrls: ['./update-emp-component.component.css']
})
export class UpdateEmpComponentComponent implements OnInit {
 updateEmployeeForm: FormGroup;
 id: number;
 employee: Employee;
  constructor(private employeeService: EmployeeService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (parm: Params) => {
        this.id = parm.id;
        console.log(this.id);
      }
    );
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.employee = data;
        console.log(this.employee.address.city);
        this.updateEmployeeForm = new FormGroup(
          {name: new FormControl(this.employee.name),
          address: new FormGroup({
          city: new FormControl(this.employee.address.city),
          state: new FormControl(this.employee.address.state),
          street: new FormControl(this.employee.address.street)
          })
         });
      }
    );
  //   console.log(this.employee.name);
  //   this.updateEmployeeForm.patchValue({
  //   name: this.employee.name,
  //   city: this.employee.address.city,
  //   state: this.employee.address.state,
  //   street: this.employee.address.street,
  // });

  }

  onSubmit(data): void {
    this.employeeService.updateEmployee(this.id, data).subscribe();
    this.route.navigate(['']);
  }
}
