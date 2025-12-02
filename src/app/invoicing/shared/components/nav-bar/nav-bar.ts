import { Component, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../../shared/services/navigation.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {

  activeItem = '';
  @Input() title: string = '';
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
    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }
}
