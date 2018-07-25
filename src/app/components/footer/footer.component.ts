import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialVisible = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSocials(event) {
    event.stopPropagation();
    this.socialVisible = !this.socialVisible;
    const clickListener = () => {
      this.socialVisible = false;
    };

    if (this.socialVisible) {
      document.body.addEventListener('click', clickListener, false);
    } else {
      document.body.removeEventListener('click', clickListener, false);
    }
  }

  openSocial(url) {
    this.socialVisible = false;
    window.open(url);
  }
}

