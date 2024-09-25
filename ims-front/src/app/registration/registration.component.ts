import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // For common directives like ngIf, ngFor
import { HttpProviderService } from '../service/http-provider.service';


@Component({
  selector: 'app-registration',
  standalone: true, 
  imports: [ReactiveFormsModule, 
    CommonModule, 
  ], 
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  hidePassword = true;
  showPopup = false;
  popUpMessage = '';
  


  constructor(private fb: FormBuilder, 
    private httpProvider: HttpProviderService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const user = this.registrationForm.value;
      this.httpProvider.registerUser(user).subscribe(
        response => {
          this.registrationForm.reset();
          this.showPopup = true;
          this.popUpMessage = response.body.message;          
        },
        error => {
          this.registrationForm.reset();
          this.showPopup = true;
          this.popUpMessage = error.error.message;
        }
      );
    }
  }
  closePopup() {

    this.showPopup = false;
    if (this.popUpMessage.includes('Added')) {
      window.location.href = '/login';
    }
  }
  generatePassword(): void {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 15; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.registrationForm.patchValue({ password });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
