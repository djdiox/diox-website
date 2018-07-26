import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {environment} from '../environments/environment';

import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {GalleryModule} from '@ngx-gallery/core';
import {InlineSVGModule} from 'ng-inline-svg';


import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {HomeComponent} from './pages/home/home.component';
import {PicturesComponent} from './pages/pictures/pictures.component';
import {AboutComponent} from './pages/about/about.component';
import {SetsComponent} from './pages/sets/sets.component';
import {WorkComponent} from './pages/work/work.component';
import {FooterComponent} from './components/footer/footer.component';
import {BlogComponent} from './pages/blog/blog.component';
import {appRoutes} from './routes';
import {HttpClientModule} from '@angular/common/http';
import {TabBarComponent} from './components/tab-bar/tab-bar.component';
import {ModalComponent} from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PicturesComponent,
    AboutComponent,
    SetsComponent,
    WorkComponent,
    FooterComponent,
    BlogComponent,
    TabBarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        useHash: true,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      } // <-- debugging purposes only
    ),
    ScrollToModule.forRoot(),
    GalleryModule.forRoot(),
    InlineSVGModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
