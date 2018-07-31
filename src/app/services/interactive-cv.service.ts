import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Page} from '../classes/page';

@Injectable({
  providedIn: 'root'
})
/**
 * A Pages services for sharing the current page
 */
export class InteractiveCvService {

  /**
   * Visible Page
   */
  private _currentPage: Subject<Page>;

  /**
   * Creates a new Instance of the service
   */
  constructor() {
    this._currentPage = new Subject<Page>();
  }

  /**
   * Page Observable
   * @returns {Observable<Page>} An Observable that will call everytime the page changes
   */
  public get currentPage(): Observable<Page> {
    return this._currentPage.asObservable();
  }

  /**
   * Sets the current Page on the Observable
   * @param page next page that should displayed
   */
  public setPage(page: Page) {
    this._currentPage.next(page);
  }
}
