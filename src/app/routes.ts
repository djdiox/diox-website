import {HomeComponent} from './pages/home/home.component';
import {BlogComponent} from './pages/blog/blog.component';
import {Routes} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {SetsComponent} from './pages/sets/sets.component';
import {PicturesComponent} from './pages/pictures/pictures.component';
import {WorkComponent} from './pages/work/work.component';
import {InteractiveCvComponent} from './pages/interactive-cv/interactive-cv.component';

/**
 * An Array of all the routes in our app
 * For a clean overview in a new file
 * @type Array
 */

/**
 * Current App Routes in the App
 * @type Array
 */
export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 'about' }
  },
  {
    path: 'sets',
    component: SetsComponent,
    data: { state: 'sets' }
  },
  {
    path: 'pictures',
    component: PicturesComponent,
    data: { state: 'pictures' }
  },
  {
    path: 'work',
    component: WorkComponent,
    data: { state: 'work' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { state: 'blog' }
  },
  {
    path: 'cv',
    component: InteractiveCvComponent,
    data: { state: 'cv' }
  }
  /*{
   path: '**',
   component: PageNotFoundComponent
   }*/
];

/**
 * Created by Markus Wagner on 20.07.18.
 */
