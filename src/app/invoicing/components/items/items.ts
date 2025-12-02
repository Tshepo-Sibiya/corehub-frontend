import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-items',
  imports: [CommonModule, NavBar],
  templateUrl: './items.html',
  styleUrl: './items.scss'
})
export class Items {
  activeItem = 'Items';
  navTitle: string = 'Items';
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
