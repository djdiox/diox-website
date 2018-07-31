/**
 * Controller for the Sets Page
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {

  /**
   * Current Selected Tab
   * @type {string}
   */
  public selected = 'biography';

  /**
   * Instance created
   */
  constructor() { }

  /**
   * Angular Initialization Method
   */
  ngOnInit() {
  }

  /**
   * Called when the user clicks on the tab
   * @param $event {string} user input
   */
  public tabChanged($event: string) {
    this.selected = $event;
  }

}
