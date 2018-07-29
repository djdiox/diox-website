import {HomeComponent} from './pages/home/home.component';
import {BlogComponent} from './pages/blog/blog.component';
import {Routes} from '@angular/router';
import {AboutComponent} from './pages/about/about.component';
import {SetsComponent} from './pages/sets/sets.component';
import {PicturesComponent} from './pages/pictures/pictures.component';
import {WorkComponent} from './pages/work/work.component';

/**
 * Created by markuswagner on 20.07.18.
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
  /*{
   path: '**',
   component: PageNotFoundComponent
   }*/
];
