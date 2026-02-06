import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { ZardCardComponent } from '@/shared/components/card';

@Component({
  selector: 'app-destinations',
  imports: [Navbar, ZardCardComponent],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {}
