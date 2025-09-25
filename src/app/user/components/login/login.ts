import { Component } from '@angular/core';
import { UserServices } from '../../services/user-services';
import { setAccessToken } from '../../../core/storage';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username: string = '';
  password: string = '';
  loginForm: FormGroup;

  constructor(private userServices: UserServices, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUser() {

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;


      this.userServices.login(email, password).subscribe({
        next: (response: any) => {
          if (response && response.token) {
            setAccessToken(response.token);
            // Navigate to the overview page after successful login using Angular Router
            this.router.navigate(['/overview']);
          }
        },
        error: (err) => {
          // handle error (e.g., show message)
          console.error('Login error:', err);
        }
      });
    } else {
      console.log('Form is invalid!');
    }
  }
}
