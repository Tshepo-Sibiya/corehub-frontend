import { Component, inject } from '@angular/core';
import { UserServices } from '../../services/user-services';
import { setAccessToken } from '../../../core/storage';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { timer, switchMap, finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username: string = '';
  password: string = '';
  loginForm: FormGroup;
  isLoading: boolean = false;
  isError: boolean = false;
  responseMessage: String = '';

  constructor(private userServices: UserServices, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  loginUser() {
    this.isError = false;
    this.responseMessage = '';

    if (this.loginForm.valid) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;
      timer(5000) // wait 5 seconds before making the API call
        .pipe(
          switchMap(() => this.userServices.login(email, password)),
          finalize(() => {
            // This always runs, whether success or error
            this.isLoading = false;
          })
        )
        .subscribe({
          next: (response: any) => {
            if (response && response.token) {
              this.isLoading = false;
              setAccessToken(response.token);
              // Navigate to the overview page after successful login using Angular Router
              this.router.navigate(['/overview']);
            }
          },
          error: (err) => {
            this.isError = true;
            this.responseMessage = err.error.message;

            // this.openSnackBar('Message....','Dismiss');
            this.isLoading = false;
            // handle error (e.g., show message)
            console.error('Login error:', err);
          }
        });

    } else {
      console.log('Form is invalid!');
    }
  }
}
