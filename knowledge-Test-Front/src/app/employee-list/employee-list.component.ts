import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { ApiService } from '../services/api.service';
import { DataEmployeeModel } from '../models/DataEmployeeModel';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

  displayedColumns: string[] = ['Id', 'Employee Name', 'Employee Salary', 'Employee Anual Salary', 'Employee Age', 'Profile Image'];  
  dataSource = new MatTableDataSource<DataEmployeeModel>([]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  constructor(private api:ApiService){    
  }

  ngOnInit(): void {    
    this.getEmployees();
  }

  getEmployees(){
    this.api.getEmployeeList().subscribe((response) =>{
      this.dataSource.data = response.data;
    }
    )
  }

}
