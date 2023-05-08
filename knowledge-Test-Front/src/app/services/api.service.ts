import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeesModel } from '../models/EmployeesModel';
import { EmployeeModel } from '../models/EmployeeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getEmployeeList(): Observable<EmployeesModel>{
    return this.http.get<EmployeesModel>('https://localhost:7295/api/Employee/employees');    
  }

  public getEmployeeById(id:number): Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>('https://localhost:7295/api/Employee/employee/' + id);    
  }
}
