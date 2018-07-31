import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-school',
  templateUrl: './cv-school.component.html',
  styleUrls: ['./cv-school.component.scss']
})
/**
 * Controller for the CV (SchoolS) Page
 */
export class CvSchoolComponent implements OnInit {

  /**
   * Current State of the CV
   * @type Object
   */
  public state = DEFAULT_STATE;

  /**
   * Instance created
   */
  constructor() {
  }

  /**
   * Angular Initialization Method
   */
  ngOnInit() {
  }

}
