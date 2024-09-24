import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpProviderService } from '../service/http-provider.service';
import { LoginUser } from '../interface/user';

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
      console.log(user);
      this.httpProvider.loginUser(user).subscribe(
        response => {
        console.log(response);
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
