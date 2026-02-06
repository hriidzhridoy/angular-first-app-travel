import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Destination, destinations } from '@/data/destinations';
import { ZardCardComponent } from '@/shared/components/card';

@Component({
  selector: 'app-tours',
  imports: [FormsModule, CommonModule, Navbar, ZardCardComponent],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class ToursComponent {
  destinations: Destination[] = destinations;

  query = '';
  maxPrice: number | null = null;
  sortBy: 'popular' | 'priceAsc' | 'priceDesc' | 'daysDesc' = 'popular';

  get filteredDestinations(): Destination[] {
    const q = this.query.trim().toLowerCase();

    let list = this.destinations.filter((d) => {
      const matchesQuery =
        !q || d.name.toLowerCase().includes(q) || d.tagline.toLowerCase().includes(q);

      const matchesPrice = this.maxPrice == null || d.priceFrom <= this.maxPrice;

      return matchesQuery && matchesPrice;
    });

    // Sorting
    if (this.sortBy === 'priceAsc') list = [...list].sort((a, b) => a.priceFrom - b.priceFrom);
    if (this.sortBy === 'priceDesc') list = [...list].sort((a, b) => b.priceFrom - a.priceFrom);
    if (this.sortBy === 'daysDesc') list = [...list].sort((a, b) => b.days - a.days);

    // "popular" keeps original order
    return list;
  }

  resetFilters() {
    this.query = '';
    this.maxPrice = null;
    this.sortBy = 'popular';
  }

  trackByName = (_: number, d: Destination) => d.name;
}
