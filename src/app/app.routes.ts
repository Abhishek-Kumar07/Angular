import { Routes } from '@angular/router';
import { Home } from './home/home';
import { WorkshopsList } from './workshops/workshops-list/workshops-list';
import { AddWorkshop } from './workshops/add-workshop/add-workshop';
import { Favorites } from './workshops/favorites/favorites';
import { PageNotFound } from './page-not-found/page-not-found';


export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Workshops App',
    },
    {
    path: '**',
    component: PageNotFound,
    title: 'Page Not Found | Workshops App',
  },
];
