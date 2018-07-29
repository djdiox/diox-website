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
   * Current State of this page, includes all changing or static variables
   */
  public state = {
    view: 'start',
    index: 0,
    progress: 0,
    breadcrumbs: ['start'],
    static: {
      schools: [
        {
          name: 'Silcherschule Kornwestheim',
          duration: '2000 - 2006',
          tooltip: 'first start into educational world'
        },
        {
          name: 'Realschule Remseck',
          duration: '2006 - 2012',
          tooltip: 'basic skills and mostly soft skills'
        },
        {
          name: 'ITS-Schule Stuttgart',
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
    const view = this.views[index];
    if (
      this.state.view === view ||
      typeof view === 'undefined'
    ) {
      return;
    }
    this.setState({
      breadcrumbs: _.take(this.views, index + 1),
      view: view,
      index: index,
      progress: (this.state.index + 1) / this.views.length * 100
    });
  }
}
