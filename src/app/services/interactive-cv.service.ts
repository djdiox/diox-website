import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';


export interface Page {
  view: string;
  index: number;
  progress: number;
  breadcrumbs: string[];
}

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
   * @returns {Observable<Page>}
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
