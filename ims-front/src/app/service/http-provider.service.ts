import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Observable } from 'rxjs';
import { LoginUser, RegisterUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {
  private baseUrl = "http://localhost:8080";
  private httpLinks = {
    userRegister: this.baseUrl + "/auth/addNewUser",
    adminRegister: this.baseUrl + "/auth/addNewAdmin",
    login: this.baseUrl + "/auth/login",

    getAllMaterials: this.baseUrl + "/userAPI/material/all",
  };

  constructor(private webApiService: WebApiService) {}

  registerUser(user: RegisterUser): Observable<any> {
    return this.webApiService.post(this.httpLinks.userRegister, user);
  }
  loginUser(user:LoginUser): Observable<any> {
    return this.webApiService.post(this.httpLinks.login, user);
  }
  getAllMaterials(token:String): Observable<any> {
    return this.webApiService.get(this.httpLinks.getAllMaterials,  null, token);
  }
}
