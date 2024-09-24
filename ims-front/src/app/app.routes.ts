import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {path:'register', component:RegistrationComponent},
    {path:'login', component:LoginComponent},
];
