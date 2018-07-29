import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-interactive-cv',
  templateUrl: './interactive-cv.component.html',
  styleUrls: ['./interactive-cv.component.scss']
})
export class InteractiveCvComponent implements OnInit {

  /**
   * Current State of this page, includes all changing or data variables
   */
  public state = {
    view: 'start',
    index: 0,
    progress: 0,
    breadcrumbs: ['start'],
    data: {
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
      ],
      experiences: [
        {
          position: 'right',
          startDate: '2012-09',
          endDate: '2015-07',
          headline: 'k+k information services GmbH',
          content: 'Quality management software'
        },
        {
          position: 'left',
          startDate: '2015-07',
          endDate: '2015-11',
          headline: 'Mediverbund AG',
          content: 'Software for doctors'
        },
        {
          position: 'right',
          startDate: '2015-11',
          endDate: '2016-05',
          headline: 'Fritz & Dietrich GbR',
          content: 'Agency for fairs & mobile software'
        },
        {
          position: 'left',
          startDate: '2016-05',
          endDate: `${new Date().getFullYear()}-${('0' + (new Date().getMonth() + 1)).slice(-2)} (today)`,
          headline: 'netvico GmbH',
          content: 'Digital signage & management software'
        },
      ]
    }
  };


  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Sets the current state, but keeps old variables
   * @param newState The new state that overwrites content
   */
  private setState(newState: any) {
    this.state = _.assign(this.state, newState);
    console.log(this.state);
  }

  /**
   * Shows the next page
   */
  public nextPage() {
    this.switchTo(this.state.index + 1);
  }

  /**
   * Shows the previous page
   */
  public previousPage() {
    this.switchTo(this.state.index - 1);
  }

  /**
   * switches the page the a index
   * @param index the index for switching
   */
  public switchTo(index: number) {
    const view = this.state.data.views[index];
    if (
      this.state.view === view ||
      typeof view === 'undefined'
    ) {
      return;
    }
    const nextState = {
      breadcrumbs: this.state.breadcrumbs,
      view: view,
      index: index,
      progress: (index) / (this.state.data.views.length - 1) * 100
    };
    if (this.state.breadcrumbs.indexOf(view) === -1) {
      nextState.breadcrumbs = [...this.state.breadcrumbs, view];
    }
    this.setState(nextState);
  }
}
