import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  public imageSources = [
    'assets/images/embedded/photo_1.jpg'
  ];

  constructor() {
  }

  ngOnInit() {
    this.imageSources = [];
  }

}
