import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private lastKey: number;
  public showNav = true;

  /**
   * Gets called everytime the user presses a Button on the page
   * @param event {KeyboardEvent} The Event that has been passed from Angular
   */
  @HostListener('window:keyup', ['$event'])
  protected keyEvent(event: KeyboardEvent) {
    if (this.afAuth.auth.currentUser !== null) {
      return;
    }
    this.lastKey = event.keyCode;
    if (event.key === 'L') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
  }

  /**
   * Initialize controller
   * @param router
   * @param afAuth
   */
  constructor(private router: Router,
              public afAuth: AngularFireAuth) {
  }


  /**
   * Initiate the Module (App)
   */
  ngOnInit() {
    this.router.events.subscribe((route) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }
}
