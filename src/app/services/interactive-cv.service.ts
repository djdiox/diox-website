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
export class InteractiveCvService {

  private _currentPage: Subject<Page>;

  constructor() {
    this._currentPage = new Subject<Page>();
  }

  public get currentPage(): Observable<Page> {
    return this._currentPage.asObservable();
  }

  public setPage(page: Page) {
    this._currentPage.next(page);
  }
}
