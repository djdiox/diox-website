import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-experience',
  templateUrl: './cv-experience.component.html',
  styleUrls: ['./cv-experience.component.scss']
})
export class CvExperienceComponent implements OnInit {

  public state = DEFAULT_STATE;
  constructor() {
  }

  ngOnInit() {
  }

}
