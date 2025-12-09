import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../shared/services/navigation-service/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { formatCurrency } from '../../shared/utils/currency-utils';

@Component({
  selector: 'app-invoicing-overview',
  imports: [CommonModule, NavBar],
  templateUrl: './invoicing-overview.html',
  styleUrl: './invoicing-overview.scss'
})
export class InvoicingOverview {

  activeItem = 'Overview';
  navTitle: string = 'Overview';
  formatCurrency = formatCurrency; 
  constructor(private navigationService: NavigationService, private router: Router, private route: ActivatedRoute) { }

  goBack(): void {
    this.navigationService.goBack(); // Navigates to the previous route
  }

  navigate(url: string): void {
    this.navigationService.navigateTo(url); // Navigates to the previous route
  }

  setActive(item: string) {
    this.activeItem = item;
    this.navTitle = this.navTitle;
    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }
}
