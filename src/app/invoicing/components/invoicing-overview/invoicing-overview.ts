import { Component } from '@angular/core';
import { NavigationService } from '../../../shared/services/navigation.service';

@Component({
  selector: 'app-invoicing-overview',
  imports: [],
  templateUrl: './invoicing-overview.html',
  styleUrl: './invoicing-overview.scss'
})
export class InvoicingOverview {

  constructor(private navigationService: NavigationService) { }

  goBack(): void {
    this.navigationService.goBack(); // Navigates to the previous route
  }
}
