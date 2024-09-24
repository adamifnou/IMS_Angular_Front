import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Observable } from 'rxjs';
import { RegisterUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  private baseUrl = "http://localhost:8080";
  private httpLinks = {
    userLogin: this.baseUrl + "/auth/addNewUser",
    adminLogin: this.baseUrl + "/auth/addNewAdmin",
    register: this.baseUrl + "/auth/addNewUser"  
  };

  constructor(private webApiService: WebApiService) {}

  registerUser(user: RegisterUser): Observable<any> {
    return this.webApiService.post(this.httpLinks.register, user);
  }
}
