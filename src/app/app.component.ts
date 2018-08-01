import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';
import {routerTransition} from '../animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition] // register the animation
})
export class AppComponent implements OnInit {

  /**
   * Initialize controller
   * @param router
   * @param afAuth
   * @param iconRegistry
   * @param sanitizer
   */
  constructor(private router: Router,
              public afAuth: AngularFireAuth) {
  }
  /**
   * The last Key which was pressed
   */
  private lastKey: number;
  /**
   * Is Currently the nav shown?
   * @type {boolean}
   */
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
   * Gets the state of the current router outlet
   * @param outlet {Object} a RouterOutlet of the app
   */
  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  /**
   * Initiate the Module (App)
   */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        console.log('end');
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }

  /**
   * Eventhook for setting the emitted value from the nav-bar
   * @param {boolean} $event the boolean
   */
  navToggled($event: boolean) {
    this.showNav = $event;
  }
}
