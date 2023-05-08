import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DataEmployeeModel } from '../models/DataEmployeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  value!: string;
  employeeData: DataEmployeeModel = {};
  constructor(private api:ApiService){}

  ngOnInit(): void {    
  }

  getEmployeeId(){
    this.api.getEmployeeById(parseInt(this.value)).subscribe((response) =>{
      this.employeeData = response.data;
    }
    )
  }
}
