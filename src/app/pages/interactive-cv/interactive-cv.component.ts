import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-interactive-cv',
  templateUrl: './interactive-cv.component.html',
  styleUrls: ['./interactive-cv.component.scss']
})
export class InteractiveCvComponent implements OnInit {

  public currentView = 'start';

  constructor() {
  }

  ngOnInit() {
  }

  public switchTo(val: string) {
    this.currentView = val;
  }
}
