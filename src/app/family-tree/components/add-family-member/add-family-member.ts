import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyTreeService } from '../../services/family-tree-services';
import { NavigationService } from '../../../shared/services/navigation.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FamilyMemberModel } from '../../models/family-member.model';
import { getTodayDate } from '../../../shared/utilities/utilities';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { timer, switchMap, finalize } from 'rxjs';

@Component({
  selector: 'app-add-family-member',

  imports: [ReactiveFormsModule, CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './add-family-member.html',
  styleUrl: './add-family-member.scss'
})
export class AddFamilyMember {

  // firstname: string = '';
  // birthdate: string = '';
  // isAlive: boolean = true;
  isLoading: boolean = false;
  registerMemberForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  isError: boolean = false;
  responseMessage: String = '';

  constructor(private familyTreeService: FamilyTreeService, private navigationService: NavigationService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.registerMemberForm = this.fb.group({
      firstName: ['', [Validators.required]],                // valid name
      lastName: ['Sibiya'],
      isalive: [true, Validators.required],                         // boolean value
      generation: [, [Validators.required, Validators.min(0)]],     // generation number, must be ≥ 0
      placeofBirth: ['', [Validators.required, Validators.minLength(3)]], // valid place name
      birthDate: [getTodayDate(), Validators.required],                // ISO date format (YYYY-MM-DD)
      deathDate: [''],
      gender: [''],                                           // leave blank if alive
    });

  }

  goBack() {
    this.navigationService.goBack(); // Navigates to the previous route
  }

  setGender(gender: String) {
    this.registerMemberForm.get('gender')?.setValue(gender);
  }

  submitForm() {
    this.isError = false;
    this.responseMessage = '';
    this.isLoading = true;
    if (this.registerMemberForm.valid) {
      const _values: FamilyMemberModel = this.registerMemberForm.value;
      console.log(_values);

      this.familyTreeService.registerNewFamilyMember(_values).subscribe({
        next: (response: any) => {
          this.isLoading = false;
          // if (response && response.token) {
          //   // setAccessToken(response.token);
          //   this.router.navigate(['/overview']);
          // }
        },
        error: (err: any) => {

          this.isError = true;
          this.responseMessage = err.error.message;
          this.isLoading = false;
          console.error('Login error:', err);
        },
        complete: () => {
          this.isLoading = false;
        }
      });

    } else {
      this.isError = true;
      this.isLoading = false;
       this.responseMessage = 'Enter all required values.';
      console.log('Form is invalid!');
    }

  }
}