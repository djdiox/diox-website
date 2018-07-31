/**
 * Controller for the CV (SchoolS) Page
 */
import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-school',
  templateUrl: './cv-school.component.html',
  styleUrls: ['./cv-school.component.scss']
})
export class CvSchoolComponent implements OnInit {

  public state = DEFAULT_STATE;
  constructor() {
  }

  ngOnInit() {
  }

}
