import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
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
