import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public image = "https://firebasestorage.googleapis.com/v0/b/imagenesportfolio-d64a8.appspot.com/o/fotoPerfil.jpeg?alt=media&token=9874b42f-1c42-48bc-898c-5a104bae260b";
}
