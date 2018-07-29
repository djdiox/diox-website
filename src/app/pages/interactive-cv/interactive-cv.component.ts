import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-interactive-cv',
  templateUrl: './interactive-cv.component.html',
  styleUrls: ['./interactive-cv.component.scss']
})
export class InteractiveCvComponent implements OnInit {

  /**
   * Current State of this page, includes all changing or static variables
   */
  public state = {
    view: 'start',
    index: 0,
    progress: 0,
    breadcrumbs: ['start'],
    static: {
      views: [
        'start',
        'school',
        'experience',
        'technology',
        'programming',
        'goals',
        'end'
      ],
      schools: [
        {
          name: 'Silcherschule Kornwestheim',
          type: 'elementary school',
          duration: '2000 - 2006',
          tooltip: 'first start into educational world'
        },
        {
          name: 'Realschule Remseck',
          type: 'middle school',
          duration: '2006 - 2012',
          tooltip: 'basic skills and mostly soft skills'
        },
        {
          name: 'ITS-Schule Stuttgart',
          type: 'apprenticeship school',
          duration: '2012 - 2015',
          tooltip: 'software and business skills'
        }
      ]
    }
  };


  constructor() {
  }

  ngOnInit() {
  }

  private setState(newState: any) {
    this.state = _.assign(this.state, newState);
    console.log(this.state);
  }

  public nextPage() {
    this.switchTo(this.state.index + 1);
  }

  public previousPage() {
    this.switchTo(this.state.index - 1);
  }

  public switchTo(index: number) {
    const view = this.state.static.views[index];
    if (
      this.state.view === view ||
      typeof view === 'undefined'
    ) {
      return;
    }
    this.setState({
      breadcrumbs: _.take(this.state.static.views, index + 1),
      view: view,
      index: index,
      progress: (this.state.index + 1) / this.state.static.views.length * 100
    });
  }
}
