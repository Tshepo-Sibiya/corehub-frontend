import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';          // ⬅️ Add this
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation-service/navigation.service';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { CustomersServices } from '../../services/services/customers-services/customers-services';

@Component({
  selector: 'app-invoicing-customers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,      // ⬅️ Add this
    NavBar
  ],
  templateUrl: './invoicing-customers.html',
  styleUrl: './invoicing-customers.scss'
})
export class InvoicingCustomers implements OnInit {

  activeItem = 'Customers';
  navTitle = 'Customers';
  searchTerm = '';

  public customersList: any[] = [];

  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute,
    private customersServices: CustomersServices
  ) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  navigate(url: string): void {
    this.navigationService.navigateTo(url);
  }

  getAllCustomers(): void {
    this.customersServices.getAllCustomers().subscribe({
      next: (data) => {
        this.customersList = (data || []).map(customer => ({
          name: customer.name || '',
          email: customer?.email || '',
          phone: customer.phone || '',
          archived: customer.archived || false
        }));
      },
      error: (error) => console.error('Error fetching customers:', error)
    });
  }

  setActive(item: string) {
    this.activeItem = item;
    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }

  get totalCustomers(): number {
    return this.customersList.length;
  }

  get activeCustomers(): number {
    return this.customersList.filter(c => !c.archived).length;
  }

  get inactiveCustomers(): number {
    return this.customersList.filter(c => c.archived).length;
  }

  get pendingCustomers(): number {
    return 0;  // Until you add a pending field
  }

}
