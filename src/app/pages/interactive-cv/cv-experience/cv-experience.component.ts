import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-experience',
  templateUrl: './cv-experience.component.html',
  styleUrls: ['./cv-experience.component.scss']
})
/**
 * Controller for the CV (Experience) Page
 */
export class CvExperienceComponent implements OnInit {

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
