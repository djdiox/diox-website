import {HomeComponent} from './pages/home/home.component';
import {BlogComponent} from './pages/blog/blog.component';
import {Routes} from '@angular/router';

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
    component: HomeComponent
  },
  {
    path: 'sets',
    component: HomeComponent
  },
  {
    path: 'pictures',
    component: HomeComponent
  },
  {
    path: 'work',
    component: HomeComponent
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
