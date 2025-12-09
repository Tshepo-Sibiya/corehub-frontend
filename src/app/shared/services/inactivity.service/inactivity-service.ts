import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Subscription, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private inactivityTime = 1 * 60 * 1000; // 2 minutes
  private countdownTime = 30; // 30 seconds before logout

  private inactivityTimer?: Subscription;
  private countdownTimer?: Subscription;

  // Emits countdown values
  countdown$ = new BehaviorSubject<number | null>(null);

  // Emits true when popup should be shown
  showPopup$ = new BehaviorSubject<boolean>(false);

  constructor(private ngZone: NgZone) {
    this.startMonitoring();
  }

  startMonitoring() {
    const activityEvents = merge(
      fromEvent(document, 'mousemove'),
      fromEvent(document, 'keydown'),
      fromEvent(document, 'click'),
      fromEvent(document, 'touchstart')
    ).pipe(mapTo(true));

    activityEvents.subscribe(() => this.resetInactivityTimer());

    this.resetInactivityTimer();
  }

  private resetInactivityTimer() {
    this.stopTimers();

    this.inactivityTimer = timer(this.inactivityTime).subscribe(() => {
      this.startCountdown();
    });
  }

  private startCountdown() {
    this.showPopup$.next(true);
    let remaining = this.countdownTime;

    this.countdown$.next(remaining);

    this.countdownTimer = timer(0, 1000).subscribe(() => {
      remaining--;

      this.countdown$.next(remaining);

      if (remaining === 0) {
        this.logout();
      }
    });
  }

  userWantsToStayLoggedIn() {
    this.showPopup$.next(false);
    this.countdown$.next(null);
    this.resetInactivityTimer();
  }

  logout() {
    this.showPopup$.next(false);
    this.countdown$.next(null);

    // 🔥 Your logout logic here
    localStorage.clear();
    window.location.href = '/';
  }

  private stopTimers() {
    this.inactivityTimer?.unsubscribe();
    this.countdownTimer?.unsubscribe();
  }
}
