import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpProviderService } from '../service/http-provider.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,
    CommonModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private httpProvider: HttpProviderService,
  ) {}

  ngOnInit():void{
    this.loginForm = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const user = this.loginForm.value;
      this.httpProvider.loginUser(user).subscribe(
        response => {
          if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('loggedUserId', response.body.id);
            sessionStorage.setItem('loggedUserToken', response.body.token);
            sessionStorage.setItem('loggedUserName', response.body.name);
            window.location.href = '/home';
          } else {
            console.error('sessionStorage is not available');
          }
      
          },
        error => {
          console.log(error);
        }
      );
  }
  }
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

}
