/**
 * Controller for the CV (Programmng) Page
 */
import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-programming',
  templateUrl: './cv-programming.component.html',
  styleUrls: ['./cv-programming.component.scss']
})
export class CvProgrammingComponent implements OnInit {

  public state = DEFAULT_STATE;
  constructor() {
  }

  ngOnInit() {
  }

}
