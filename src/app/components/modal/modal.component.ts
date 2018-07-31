import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOptions, ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
/**
 * Modal (Window in Web) for this page
 */
export class ModalComponent implements OnInit {

  /**
   * The Options for this modal
   */
  public CurrentModalOptions: ModalOptions;

  /**
   * A event that will be triggered on every close
   * @type {EventEmitter}
   */
  @Output() closing = new EventEmitter(true);

  /**
   * Creates a new Instance of this Component
   * @param modalService
   */
  constructor(private modalService: ModalService) {
    this.modalService
      .CurrentModalOptions
      .subscribe((options: ModalOptions) => this.CurrentModalOptions = options);
  }

  /**
   * Angular Initialization
   */
  ngOnInit() {
  }

  /**
   * Closes the current modal
   * @param result
   */
  closeModal(result: boolean) {
    this.CurrentModalOptions.result = result
    this.modalService.hideCurrentModal();
  }
}
