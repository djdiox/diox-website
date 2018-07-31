import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-technology',
  templateUrl: './cv-technology.component.html',
  styleUrls: ['./cv-technology.component.scss']
})
/**
 * Controller for the CV (Technology) Page
 */
export class CvTechnologyComponent implements OnInit {

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
   * Angular Component Initialization Method
   */
  ngOnInit() {
  }

}
