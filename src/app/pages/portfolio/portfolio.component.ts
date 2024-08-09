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
      logo: 'assets/img/portfolio/logo.svg',
      description:
        'Bricke es un E-Commerce dedicado al intercambio y venta de productos entre personas. Mi trabajo consiste en realizar análisis de problemáticas, definición de casos de uso, entre otros.Trabajo con Angular desarrollando Front-end y Figma como herramienta de diseño de vistas.',
    },

    {
      id: 'heroesApp',
      title: 'Heroes Project',
      logo: 'assets/img/portfolio/heroesLogo.jpg',
      description:
        'Proyecto realizado en base a un Curso Udemy. Aqui se utilizan tecnologias como Typscript , Angular CLI y Bootstrap ',
    },
    {
      id: 'spotiApp',
      title: 'SpotiApp Project',
      logo: 'assets/img/portfolio/spotiappLogo.jpg',
      description:
        'Proyecto desarrollado en base a Curso Udemy, usando frameworks como Angular, bootstrap y consumiendo api de Spotify ',
    },
    {
      id: 'formularios',
      title: 'Formularios Templates y Reactivos',
      logo: 'assets/img/portfolio/formularioLogo.png',
      description:
        ' Proyecto realizado en Angular CLi consumiendo Api de paises aqui se demuestra los dos tipos de formulario sus usos y validaciones',
    },
    {
      id: 'dragonBalls',
      title: 'Dragon Balls Serverless Project',
      logo: 'assets/img/portfolio/serverlessLogo.jpeg',
      description:
        ' Es un proyecto trabajo realizado utilizando tecnologias como  Serverless (Back-end) y Angular CLi (Front-end).El lenguaje Utilizado es Javascript.',
    },
    {
      id: 'listaTareas',
      title: 'Listas Tareas en Node',
      logo: 'assets/img/portfolio/listaTareasLogo.jpg',
      description:
        ' Proyecto de aplicacion de consola realizado en base a un curso Udemy , utilizando Node como framework,y algunos paquetes de aplicacion de consolas interactivas como  Inquirer y Yargs ',
    },
  ];
}
