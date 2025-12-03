import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NavigationService } from './shared/services/navigation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('corehub-frontend');

    constructor(

    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  navigate(url: string): void {
    this.navigationService.navigateTo(url); // Navigates to the previous route
  }
}
