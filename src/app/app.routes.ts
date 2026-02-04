import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Destinations } from './pages/destinations/destinations';
import { Tours } from './pages/tours/tours';
import { Reviews } from './pages/reviews/reviews';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'destinations',
    component: Destinations,
  },

  { path: 'tours', component: Tours },
  { path: 'reviews', component: Reviews },
];
