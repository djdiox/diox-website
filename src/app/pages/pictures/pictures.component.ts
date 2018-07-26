import {Component, OnInit} from '@angular/core';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  images: GalleryItem[];

  constructor() {
  }

  ngOnInit() {
    this.images = [
      new ImageItem({src: 'assets/images/embedded/photo_1.jpg', thumb: 'assets/images/embedded/photo_1.jpg'}),
      new ImageItem({src: 'assets/images/embedded/photo_1.jpg', thumb: 'assets/images/embedded/photo_1.jpg'})
      // ... more items
    ];
  }

}
