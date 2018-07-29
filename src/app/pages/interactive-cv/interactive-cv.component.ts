import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-interactive-cv',
  templateUrl: './interactive-cv.component.html',
  styleUrls: ['./interactive-cv.component.scss']
})
export class InteractiveCvComponent implements OnInit {

  /**
   * List of views of the CV
   * @type {[string,string,string,string,string,string,string]}
   */
  public views = [
    'start',
    'school',
    'experience',
    'technology',
    'programming',
    'goals',
    'end'
  ];

  /**
   * Current State of this page, includes all changing variables
   */
  public state = {
    view: 'start',
    index: 0,
    progress: 0,
    breadcrumbs: ['start']
  };


  constructor() {
  }

  ngOnInit() {
  }

  public nextPage() {
    this.switchTo(this.state.index + 1);
  }

  public previousPage() {
    this.switchTo(this.state.index - 1);
  }

  public switchTo(index: number) {
    const view = this.views[index];
    if (
      this.state.view === view ||
      typeof view === 'undefined'
    ) {
      return;
    }
    this.state = {
      breadcrumbs: _.take(this.views, index + 1),
      view: view,
      index: index,
      progress: (this.state.index + 1) / this.views.length * 100
    };
  }
}
