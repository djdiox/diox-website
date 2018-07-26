import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalOptions, ModalService} from '../../services/modal.service';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public CurrentModalOptions: ModalOptions;
  @Output() closing = new EventEmitter(true);

  constructor(private modalService: ModalService) {
    this.modalService
      .CurrentModalOptions
      .subscribe((options: ModalOptions) => this.CurrentModalOptions = options);
  }

  ngOnInit() {
  }

  closeModal(result: boolean) {
    this.CurrentModalOptions.result = result
    this.modalService.hideCurrentModal();
  }
}
