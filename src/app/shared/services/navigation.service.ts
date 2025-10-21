import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private location: Location, private router: Router) {}

  goBack(fallbackRoute: string = '/dashboard'): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate([fallbackRoute]);
    }
  }
}
