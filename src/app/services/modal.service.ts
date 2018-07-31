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

  /**
   * A Name to find the Modal
   */
  public name: string;

  /**
   * Visibile Header Element
   */
  public title: string;

  /**
   * Visible Content Element
   */
  public content: string;
  /**
   * Is it being displayed?
   */
  public visible: boolean;

  /**
   * Should it have buttons?
   */
  public interactive?: boolean;

  /**
   * Result if Interactive
   * @type {boolean}
   */
  public result = false;
  /**
   * Displayed Text on Yes Button
   */
  public buttonYesText?: string;

  /**
   * Displayed Text on No Button
   */
  public buttonNoText?: string;
}

@Injectable({
  providedIn: 'root'
})
/**
 * Provies Appwide Access to Modals
 */
export class ModalService {

  /**
   * Subject of the current Modal Options
   */
  private _currentModalOptions: Subject<ModalOptions>;

  /**
   * The last shown modal on the view
   */
  private options: ModalOptions;

  constructor() {
    this._currentModalOptions = new Subject<ModalOptions>();
  }

  /**
   * Returns an Observable for the currentModalOptions
   * @returns {Observable<ModalOptions>} Event to hook on
   * @constructor A fine Modal
   */
  public get CurrentModalOptions(): Observable<ModalOptions> {
    return this._currentModalOptions.asObservable();
  }

  /**
   * Shows the default modal on view by giving some parameters
   * @param name A unique name
   * @param title a title
   * @param content the content
   */
  public showDefaultModal(name: string, title: string, content: string) {
    const modalOptions = new ModalOptions(name, title, content, true);
    this.options = modalOptions;
    this._currentModalOptions.next(modalOptions);
  }

  /**
   * Hides the last modal
   * @param result
   */
  public hideCurrentModal(result = false) {
    this.options.visible = false;
    this.options.result = result;
    this._currentModalOptions.next(this.options);
  }
}
