import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation.service';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-invoice-settings',
  imports: [CommonModule,NavBar],
  templateUrl: './invoice-settings.html',
  styleUrl: './invoice-settings.scss'
})
export class InvoiceSettings {

  activeItem = 'Settings';
  constructor(private navigationService: NavigationService, private router: Router, private route: ActivatedRoute) { }


  goBack(): void {
    this.navigationService.goBack(); // Navigates to the previous route
  }

  navigate(url: string): void {
    this.navigationService.navigateTo(url); // Navigates to the previous route
  }

  setActive(item: string) {
    this.activeItem = item;
    // this.navigate(item.toLowerCase());

    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }

}
