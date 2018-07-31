import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
/**
 * A navbar for redirecting through the site
 */
export class NavigationComponent implements OnInit {

  /**
   * Event that will be triggered if the user presses the nav toggle button
   * @type {EventEmitter<boolean>}
   */
  @Output() navToggle = new EventEmitter<boolean>();

  /**
   * Is this nav visible?
   * @type {boolean}
   */
  public showNav = true;

  /**
   * Class Initialization
   */
  constructor() {
  }

  /**
   * Angular Component Initialization Method
   */
  ngOnInit() {
  }

  /**
   * Toggles the navbar, and emits the event
   */
  public toggleNav() {
    this.showNav = !this.showNav;
    this.navToggle.emit(this.showNav);
  }
}
