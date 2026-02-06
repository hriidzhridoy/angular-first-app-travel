import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Destinations } from './pages/destinations/destinations';
import { Reviews } from './pages/reviews/reviews';
import { ToursComponent } from './pages/tours/tours';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'destinations',
    component: Destinations,
  },

  { path: 'tours', component: ToursComponent },
  { path: 'reviews', component: Reviews },
];
