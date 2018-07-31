import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
/**
 * A Nav-bar that has been flipped 90 degrees
 */
export class TabBarComponent implements OnInit {

  /**
   * Tabs that gonna be displayed
   * @type {Array} the array of strings for the tabs
   */
  @Input() public tabs: string[] = [];

  /**
   * Emitter, when the value is selected
   * @type {EventEmitter<string>}
   */
  @Output() selected = new EventEmitter<string>();

  /**
   * The Value of the selected tab
   * @type {any}
   */
  @Input() public current: string = null;

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
   * Selected the tab and emits a value
   * @param {string} current
   */
  public select(current: string) {
    this.current = current;
    this.selected.next(current);
  }
}
