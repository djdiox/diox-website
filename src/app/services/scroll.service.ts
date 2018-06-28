import {Injectable} from '@angular/core';
import {ScrollToConfigOptions, ScrollToService} from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private _scrollService: ScrollToService) {
  }

  private config: ScrollToConfigOptions = {
    container: 'custom-container',
    target: 'destination',
    duration: 650,
    easing: 'easeOutElastic',
    offset: 20
  };


}
