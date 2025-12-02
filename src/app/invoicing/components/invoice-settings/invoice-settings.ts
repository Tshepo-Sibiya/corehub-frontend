import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation.service';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { InvoiceSettingsService } from '../../shared/services/settings/settings';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice-settings',
  standalone: true,
  imports: [CommonModule,NavBar, ReactiveFormsModule],
  templateUrl: './invoice-settings.html',
  styleUrl: './invoice-settings.scss'
})
export class InvoiceSettingsComponent implements OnInit {

  settingsForm!: FormGroup;
  activeItem = 'Settings';
  navTitle: string = 'Settings';

  constructor(
    private fb: FormBuilder,
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute,
    private invoiceSettingsService: InvoiceSettingsService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getInvoiceSettings();
  }

  initForm() {
    this.settingsForm = this.fb.group({
      companyName: [''],
      registrationNumber: [''],
      vatNumber: [''],
      vatRate: [],
      emailAddress: [''],
      telephone: [''],
      invoiceNotes: [''],

      // Bank
      accountNumber: [],
      bankName: [''],
      branchName: [''],
      branchCode: [''],

      // Address
      addressLineOne: [''],
      addressLineTwo: [''],
      suburb: [''],
      city: [''],
      province: [''],
      country: [''],
      postalCode: []
    });
  }

  getInvoiceSettings() {
    this.invoiceSettingsService.getInvoiceSettings().subscribe({
      next: (data) => {
        this.settingsForm.patchValue(data);
        console.log('Form patched:', this.settingsForm.value);
      },
      error: (error) => {
        console.error('Error fetching invoice settings:', error);
      }
    });
  }

  createOrUpdateInvoiceSettings() {
    const settings = this.settingsForm.value;
    this.invoiceSettingsService.createOrUpdateInvoiceSettings(settings).subscribe({
      next: (res) => console.log('Settings saved successfully', res),
      error: (err) => console.error('Error saving settings', err)
    });
  }

  onSubmit() {
    if (this.settingsForm.invalid) return;

    console.log('Submitting form:', this.settingsForm.value);

    // this.invoiceSettingsService.updateInvoiceSettings(this.settingsForm.value)
    //   .subscribe({
    //     next: (res) => console.log('Settings updated successfully', res),
    //     error: (err) => console.error('Error saving settings', err)
    //   });
  }

  goBack() {
    this.navigationService.goBack();
  }

  navigate(url: string) {
    this.navigationService.navigateTo(url);
  }

  setActive(item: string) {
    this.activeItem = item;
    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }
}
