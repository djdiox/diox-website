import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-interactive-cv',
  templateUrl: './interactive-cv.component.html',
  styleUrls: ['./interactive-cv.component.scss']
})
export class InteractiveCvComponent implements OnInit {

  public views = [
    'start',
    'school',
    'experience',
    'technology',
    'programming',
    'goals',
    'end'
  ];

  public breadcrumbs = ['start'];

  public currentView = 'start';

  constructor() {
  }

  ngOnInit() {
  }

  public nextPage() {
    this.switchTo(this.views.indexOf(this.currentView) + 1);
  }

  public previousPage() {
    this.switchTo(this.views.indexOf(this.currentView) - 1);
  }

  public switchTo(index: number) {
    const view = this.views[index];
    if (this.currentView === view) {
      return;
    }
    this.breadcrumbs = _.take(this.views, index + 1);
    this.currentView = view;
  }
}
