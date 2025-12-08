import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-nav-bar',
  imports: [CommonModule],
  templateUrl: './main-nav-bar.html',
  styleUrl: './main-nav-bar.scss'
})
export class MainNavBar {

  activeItem = 'Billing';
  @Input() title: string = 'Billing';
  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activeItem = this.title;
    console.log(this.activeItem);
  }


  navigate(url: string) {
    this.navigationService.navigateTo(url);
  }

  setActive(item: string) {
    this.activeItem = item;
    // this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }

}
