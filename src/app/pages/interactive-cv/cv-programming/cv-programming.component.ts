import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-programming',
  templateUrl: './cv-programming.component.html',
  styleUrls: ['./cv-programming.component.scss']
})
/**
 * Controller for the CV (Programmng) Page
 */
export class CvProgrammingComponent implements OnInit {

  /**
   * Current State of the CV
   * @type Object
   */
  public state = DEFAULT_STATE;

  /**
   * Class Initialization
   */
  constructor() {
  }

  /**
   * Class Initialization
   */
  ngOnInit() {
  }

}
