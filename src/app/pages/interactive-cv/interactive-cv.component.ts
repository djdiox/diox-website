import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {InteractiveCvService} from '../../services/interactive-cv.service';
import {DEFAULT_STATE} from './_presets/cv-default-state';

@Component({
  selector: 'app-interactive-cv',
  templateUrl: './interactive-cv.component.html',
  styleUrls: ['./interactive-cv.component.scss']
})
/**
 * Controller for the Interactive CV
 */
export class InteractiveCvComponent implements OnInit {

  /**
   * Current State of this page, includes all changing or data variables
   */
  public state = DEFAULT_STATE;

  /**
   * Class Initialization
   * @param interActiveCvService
   */
  constructor(private interActiveCvService: InteractiveCvService) {
  }

  /**
   * Angular Component Initialization Method
   */
  ngOnInit() {
    // this.interActiveCvService
    //   .currentPage
    //   .subscribe((page: Page) => {
    //     this.setState(DEFAULT_STATE);
    //     this.setState(page);
    //   });
  }

  /**
   * Sets the current state, but keeps old variables
   * @param newState The new state that overwrites content
   */
  private setState(newState: any) {
    this.state = _.assign(this.state, newState);
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
    const page: Page = {
      breadcrumbs: this.getBreadcrumbs(view, this.state.breadcrumbs),
      view: view,
      index: index,
      progress: this.calculateProgress(index, this.state.data.views.length - 1)
    };
    this.interActiveCvService.setPage(page);
    this.setState(page);
  }
}
