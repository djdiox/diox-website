import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {ScrollService} from './services/scroll.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {auth} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private lastKey: number;

  @HostListener('window:keyup', ['$event'])
  protected keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (this.afAuth.auth.currentUser !== null) {
      return;
    }
    this.lastKey = event.keyCode;
    if (event.key === 'L') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }
  }

  ngOnInit() {
    this.router.events.subscribe((route) => {
      console.log(route);
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

  constructor(private router: Router,
              public afAuth: AngularFireAuth) {

  }
}
