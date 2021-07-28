import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from 'src/app/app.employee.model';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-show-emp-detail-component',
  templateUrl: './show-emp-detail-component.component.html',
  styleUrls: ['./show-emp-detail-component.component.css']
})
export class ShowEmpDetailComponentComponent implements OnInit {
  id: number;
  employee: Employee;
  constructor(private employeeService: EmployeeService, private activatedROute: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.activatedROute.params.subscribe(
      (parm: Params) => {
        this.id = parm.id;
        console.log(this.id);
      }
    );
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {console.log(data);
                 this.employee = data;
      }
    );
  }
  list(): void {
  this.route.navigate(['']);
  }

}
