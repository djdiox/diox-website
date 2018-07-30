import {Component, OnInit} from '@angular/core';
import {DEFAULT_STATE} from '../_presets/cv-default-state';

@Component({
  selector: 'app-cv-technology',
  templateUrl: './cv-technology.component.html',
  styleUrls: ['./cv-technology.component.scss']
})
export class CvTechnologyComponent implements OnInit {

  public state = DEFAULT_STATE;
  constructor() {
  }

  ngOnInit() {
  }

}
