import { Component } from '@angular/core';
import { InactivityService } from '../../services/inactivity.service/inactivity-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout-warning',
  imports: [
    CommonModule,  // <-- needed for async pipe
  ],
  templateUrl: './logout-warning.html',
  styleUrl: './logout-warning.scss'
})
export class LogoutWarning {
  countdown$;
  showPopup$;

  constructor(private inactivityService: InactivityService) {
    this.countdown$ = this.inactivityService.countdown$;
    this.showPopup$ = this.inactivityService.showPopup$;
  }

  stayLoggedIn() {
    this.inactivityService.userWantsToStayLoggedIn();
  }
}
