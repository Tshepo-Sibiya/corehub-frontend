import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private location: Location, private router: Router, private route: ActivatedRoute) { }

  goBack(fallbackRoute: string = '/dashboard'): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate([fallbackRoute]);
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }


  navigateRelativeTo(nav: string, relativeTo: any): void {
    this.router.navigate(['invoicing/invoices']);
    this.navigateTo(nav);
  }
}
