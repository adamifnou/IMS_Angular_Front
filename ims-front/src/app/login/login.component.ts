import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpProviderService } from '../service/http-provider.service';
import { MatDialog } from '@angular/material/dialog';

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
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {}

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

}
