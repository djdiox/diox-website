/**
 * Controller for the Pictures Page
 */
import {Component, OnInit} from '@angular/core';
import {GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {

  /**
   * A List of all displayed Gallery Items
   */
  images: GalleryItem[] = [
    new ImageItem({src: 'assets/images/embedded/photo_1.jpg', thumb: 'assets/images/embedded/photo_1.jpg'}),
    new ImageItem({src: 'assets/images/embedded/photo_1.jpg', thumb: 'assets/images/embedded/photo_1.jpg'})
    // ... more items
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
