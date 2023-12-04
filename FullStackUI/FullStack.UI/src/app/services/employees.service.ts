import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl : string = environment.baseApiUrl
  constructor(private HttpClient : HttpClient) { }

  getAllEmployees() : Observable<Employee[]> {
    return this.HttpClient.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }
}
