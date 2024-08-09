import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  anio: number = new Date().getFullYear();
  gmail: string = 'mateo21cardozo@gmail.com';
}
