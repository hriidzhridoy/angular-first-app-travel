import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ZardButtonComponent } from '../components/button';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ZardButtonComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
