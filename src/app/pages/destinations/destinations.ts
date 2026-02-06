import { Destination, destinations } from './../../data/destinations';
import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { ZardCardComponent } from '@/shared/components/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destinations',
  imports: [CommonModule, Navbar, ZardCardComponent],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {
  destinations: Destination[] = destinations;

  trackByName = (_: number, item: Destination) => item.name;
}
