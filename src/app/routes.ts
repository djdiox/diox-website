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
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'sets',
    component: SetsComponent
  },
  {
    path: 'pictures',
    component: PicturesComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'cv',
    component: InteractiveCvComponent
  }
  /*{
   path: '**',
   component: PageNotFoundComponent
   }*/
];

/**
 * Created by Markus Wagner on 20.07.18.
 */
