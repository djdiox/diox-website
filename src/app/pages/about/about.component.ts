/**
 * Controller for the About Page
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  /**
   * Collected Icons
   * TODO: Refactor this
   * @type Array<object<
   */
  public softwareIcons = [
    {
      path: 'assets/images/icons/angular.svg',
      name: 'Angular'
    },
    {
      path: 'assets/images/icons/firebase.svg',
      name: 'Firbase'
    },
    {
      path: 'assets/images/icons/docker.svg',
      name: 'Docker'
    },
    {
      path: 'assets/images/icons/ubuntu.svg',
      name: 'Ubuntu'
    },
    {
      path: 'assets/images/icons/photoshop.svg',
      name: 'Photoshop'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
