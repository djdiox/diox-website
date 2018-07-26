import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/index';

/**
 * The Modal Options that will create a new simple modal
 */
export class ModalOptions {

  /**
   * Creates the instance of the class
   * Default Visible: false
   * @param name the name to find the modal again
   * @param header the header of the current modal
   * @param content the content (text) of the modal
   */
  constructor(name: string, title: string, content: string, visible = false) {
    this.name = name;
    this.title = title;
    this.content = content;
    this.visible = visible;
  }

  public name: string;
  public title: string;
  public visible: boolean;
  public content: string;
  public interactive?: boolean;
  public result = false;
  public buttonYesText?: string;
  public buttonNoText?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _currentModalOptions: Subject<ModalOptions>;
  private _lastShownModal: ModalOptions;

  constructor() {
    this._currentModalOptions = new Subject<ModalOptions>(null);
  }

  public get CurrentModalOptions(): Observable<ModalOptions> {
    return this._currentModalOptions.asObservable();
  }

  public showDefaultModal(name: string, title: string, content: string) {
    const modalOptions = new ModalOptions(name, title, content, true);
    this._lastShownModal = modalOptions;
    this._currentModalOptions.next(modalOptions);
  }

  public hideCurrentModal(result = false) {
    this._lastShownModal.visible = false;
    this._lastShownModals.result = result;
    this._currentModalOptions.next(this._lastShownModal);
  }
}
