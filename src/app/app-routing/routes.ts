import {Routes} from '@angular/router';

import {MenuComponent} from '../menu/menu.component';
import {HomeComponent} from '../home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];