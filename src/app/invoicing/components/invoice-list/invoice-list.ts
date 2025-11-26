import { Component } from '@angular/core';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-invoice-list',
  imports: [CommonModule, NavBar],
  templateUrl: './invoice-list.html',
  styleUrl: './invoice-list.scss'
})
export class InvoiceList {

  activeItem = 'Invoices';
  constructor(private navigationService: NavigationService, private router: Router, private route: ActivatedRoute) { }

  navigate(url: string): void {
    this.navigationService.navigateTo(url); // Navigates to the previous route
  }



  setActive(item: string) {
    this.activeItem = item;
    // this.navigate(item.toLowerCase());

    // this.router.navigate(['invoicing/invoices']);
    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }

}
