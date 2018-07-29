// Angular Imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// Angular Requirements
import {environment} from '../environments/environment';
import {appRoutes} from './routes';

// External Imports
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {GalleryModule} from '@ngx-gallery/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {
  MatButtonModule, MatChipsModule, MatIconModule, MatListModule,
  MatProgressBarModule,
  MatTooltipModule
} from '@angular/material';

// Components
import {NavigationComponent} from './components/navigation/navigation.component';
import {TabBarComponent} from './components/tab-bar/tab-bar.component';
import {ModalComponent} from './components/modal/modal.component';
import {ChatComponent} from './components/chat/chat.component';
import {FooterComponent} from './components/footer/footer.component';

// Pages
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {PicturesComponent} from './pages/pictures/pictures.component';
import {AboutComponent} from './pages/about/about.component';
import {SetsComponent} from './pages/sets/sets.component';
import {WorkComponent} from './pages/work/work.component';
import {BlogComponent} from './pages/blog/blog.component';
import {InteractiveCvComponent} from './pages/interactive-cv/interactive-cv.component';

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
    ModalComponent,
    ChatComponent,
    InteractiveCvComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
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
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatChipsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
