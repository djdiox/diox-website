import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  public images = [
    {
      image: '/assets/images/embedded/photo_1.jpg', // path to image
      title: 'Arkbar Koh Samui 2018' // caption for image
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
