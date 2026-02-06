import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Destinations } from './pages/destinations/destinations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-first-app-travel');
}
