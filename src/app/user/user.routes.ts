import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';



export const USER_ROUTES: Routes = [
    { path: '', component: Login },
    { path: 'user-registration', component: Register },
];
