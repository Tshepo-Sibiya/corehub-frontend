import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation.service';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule, NavBar],
  templateUrl: './quotes.html',
  styleUrl: './quotes.scss',
})
export class Quotes {
  activeItem = 'Quotes';
  navTitle: string = 'Quotes';
  constructor(private navigationService: NavigationService, private router: Router, private route: ActivatedRoute) { }

  navigate(url: string): void {
    this.navigationService.navigateTo(url); // Navigates to the previous route
  }



  setActive(item: string) {

    this.activeItem = item;
    this.navTitle = this.navTitle;
    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }
}
