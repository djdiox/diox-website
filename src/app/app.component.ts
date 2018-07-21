import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScrollService} from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private activatedRoute: ActivatedRoute, private scrollService: ScrollService) {
    activatedRoute.url.subscribe((route) => {
      this.scrollService.scrollTo(route);
    });
  }
}
