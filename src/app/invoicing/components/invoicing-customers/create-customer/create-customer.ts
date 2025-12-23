

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../shared/services/navigation-service/navigation.service';
import { CustomersServices } from '../../../services/services/customers-services/customers-services';
import { NavBar } from '../../../shared/components/nav-bar/nav-bar';


@Component({
  selector: 'app-create-customer',
  standalone: true,
  templateUrl: './create-customer.html',
  styleUrl: './create-customer.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavBar
  ]
})
export class CreateCustomer implements OnInit {

  navTitle = 'Create Customer';

  createCustomerForm!: FormGroup;
  isSaving = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private navigationService: NavigationService,
    private customersService: CustomersServices
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  /** Initialize Reactive Form */
  initForm(): void {
    this.createCustomerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      notes: [''],
    });
  }

  /** Return form controls for template access */
  get f() {
    return this.createCustomerForm.controls;
  }

  /** Save customer */
  onSubmit(): void {
    if (this.createCustomerForm.invalid) {
      this.createCustomerForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;

    const payload = {
      ...this.createCustomerForm.value,
      archived: false
    };

    this.customersService.createCustomer(payload).subscribe({
      next: () => {
        this.isSaving = false;
        this.navigationService.navigateTo('/invoicing/customers');
      },
      error: (err) => {
        this.isSaving = false;
        console.error('Error creating customer:', err);
      }
    });
  }

  cancel(): void {
    this.navigationService.navigateTo('/invoicing/customers');
  }
}
