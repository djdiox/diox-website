import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
/**
 * Sticky Footer for the bottom of the page
 */
export class FooterComponent implements OnInit {
  /**
   * Are the social Buttons visible?
   * @type {boolean}
   */
  public socialVisible = false;

  /**
   * Class Initialization
   */
  constructor() { }

  /**
   * Angular Component Initialization Method
   */
  ngOnInit() {
  }

  /**
   * Toggles the list of social links
   * @param event
   */
  toggleSocials(event) {
    event.stopPropagation();
    this.socialVisible = !this.socialVisible;
    const clickListener = () => {
      this.socialVisible = false;
    };

    if (this.socialVisible) {
      document.body.addEventListener('click', clickListener, false);
    } else {
      document.body.removeEventListener('click', clickListener, false);
    }
  }

  /**
   * Opens the specified URL in a new window
   * @param url
   */
  openSocial(url) {
    this.socialVisible = false;
    window.open(url);
  }
}

