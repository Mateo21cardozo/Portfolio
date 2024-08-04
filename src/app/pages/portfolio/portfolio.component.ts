import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})

export class PortfolioComponent {
 public projects: any[] = [
  {
    id: 'bricke',
    title: 'Bricke',
    logo: 'assets/img/portfolio/cabin.png'
  },
  {
    id: 'dragonBallSls',
    title: 'Project Serverless',
    logo: 'assets/img/portfolio/cake.png'
  },
  {
    id: 'heroesApp',
    title: 'Project Heroes',
    logo: 'assets/img/portfolio/circus.png'
  },
  {
    id: 'sarasa',
    title: 'Sarasa',
    logo: 'assets/img/portfolio/cabin.png'
  },
  {
    id: 'coco',
    title: 'Project Coco',
    logo: 'assets/img/portfolio/cake.png'
  },
  {
    id: 'pepe',
    title: 'Project Pepe',
    logo: 'assets/img/portfolio/circus.png'
  }
 ];
}
