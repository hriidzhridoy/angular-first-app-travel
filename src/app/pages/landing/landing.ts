import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { ZardButtonComponent } from '@/shared/components/button';

@Component({
  selector: 'app-landing',
  imports: [Navbar, ZardButtonComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  year = new Date().getFullYear();
}
