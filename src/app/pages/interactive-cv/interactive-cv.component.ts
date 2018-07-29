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
      ],
      technology: {
        tools: [
          'Angular.JS',
          'Angular 2+',
          'Firebase',
          'Node.JS',
          'GraphQL',
          'webpack',
          'NativeScript',
          'yarn',
          'MongoDB',
          'MySQL',
          'PostgresSQL',
          'GitLab',
          'Docker',
          'Ubuntu',
          'Webstorm',
          'VS Code',
          'MacOSX',
          'Windows',
          'Visual Studio',
          'Unity',
          'Office'
        ]
      },
      programming: {
        languages: [
          'C#',
          'JavaScript (ES6)',
          'Typescript',
          'HTML5',
          'CSS 3.0',
          'SCSS',
          'PWA',
          'PHP',
          'bash',
          'SQL',
          'NoSQL',
          'Visual Basic',
          'VBA',
        ]
      }
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
   * Adds the view to current breadcrumbs, or returns them
   * @param view{string} the view that has been set
   * @param breadcrumbs{[string]} the current breadcrumbs
   * @returns {[string]} the new current breadcrumbs
   */
  private getBreadcrumbs(view: string, breadcrumbs: string[]) {
    return breadcrumbs.indexOf(view) !== -1 ? breadcrumbs : [...breadcrumbs, view];
  }

  /**
   * Calculates the progress for the progress bar (in percent)
   * @param index{number} The index of the next page
   * @param viewCount{number} the current view count
   * @returns {number} the current percentage of the cv
   */
  private calculateProgress(index: number, viewCount: number) {
    return index / viewCount * 100;
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
    this.setState({
      breadcrumbs: this.getBreadcrumbs(view, this.state.breadcrumbs),
      view: view,
      index: index,
      progress: this.calculateProgress(index, this.state.data.views.length - 1)
    });
  }
}
