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
        'En Bricke, un e-commerce dedicado al intercambio y venta de productos entre personas, trabajo como junior front-end developer. Mis responsabilidades incluyen el análisis de problemas, la definición de casos de uso y otras tareas relacionadas. Utilizo Angular para el desarrollo del front-end y Figma para el diseño de vistas. El equipo está compuesto por un líder técnico front-end, dos desarrolladores backend, una diseñadora de producto y un tester. Empleamos metodologías Kanban y gestionamos el proyecto mediante Trello.',
    },
    {
      id: 'serverless',
      title: 'Serverless Project',
      logo: 'assets/img/portfolio/serverlessLogo.png',
      description:
        'Este proyecto utiliza tecnologías como Serverless y AWS Lambda para el back-end, y Angular CLI para el front-end, con JavaScript como lenguaje principal. La aplicación se enfoca en la presentación y manejo de personajes de Dragon Ball. Conecta en una lambda que consume una API de Dragon Ball para obtener y gestionar información sobre los personajes.',
    },
    {
      id: 'spotiApp',
      title: 'SpotiApp Project',
      logo: 'assets/img/portfolio/spotiappLogo.jpg',
      description:
        'Este proyecto, desarrollado a partir de un curso de Udemy, utiliza Angular y Bootstrap para crear una aplicación que consume la API de Spotify. Incluye la gestión de rutas y parámetros en Angular, carruseles con Bootstrap 4, y la obtención de datos sobre artistas, álbumes y audio mediante HTTP. Además, maneja datos asíncronos con observables, enlaza campos de texto usando ngModel, y ofrece widgets de Spotify y reproducción de audio con HTML5, así como integración de mapas.',
    },
    {
      id: 'acyac',
      title: 'Acyac',
      logo: 'assets/img/portfolio/PHP-logo.png',
      description:
        ' ACyac es un sitio web diseñado para gestionar eventos en una biblioteca popular y salón de eventos. El sitio permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los eventos, La interfaz ha sido desarrollada utilizando Bootstrap,os datos de los eventos se almacenan en una base de datos local alojada en un servidor XAMPP. La conexión entre la base de datos y la aplicación se realiza mediante PHP',
    },

    {
      id: 'formularios',
      title: 'Formularios Templates y Reactivos',
      logo: 'assets/img/portfolio/formularioLogo.png',
      description:
        'Este proyecto en Angular CLI usa una API de países para demostrar el manejo de formularios, incluyendo el uso de `ngModel`, validaciones predefinidas y personalizadas, y validaciones asíncronas. También cubre la realización de submit con `ngSubmit`, el envío de datos solo cuando el formulario es válido, la creación de formularios en el componente, la carga de información por defecto y la suscripción a cambios en los valores del formulario.',
    },

    {
      id: 'theweekend',
      title: 'the Weekend Project',
      logo: 'assets/img/portfolio/theweekendLogo.png',
      description:
        'The Weekend es un software diseñado para gestionar los turnos en una barbería que lleva el mismo nombre. El proyecto cuenta con un backend local desarrollado en JSON, y está construido utilizando Bootstrap para el diseño del sitio web. La aplicación se conecta al backend local en Node.js, permitiendo a los usuarios reservar citas a través de formularios de reservas y completar encuestas de satisfacción para evaluar su experiencia.',
    },

    {
      id: 'farmapp',
      title: 'FarmApp',
      logo: 'assets/img/portfolio/farmappLogo.png',
      description:
        'Farmapp es una aplicación en desarrollo diseñada para facilitar la búsqueda de farmacias de turno cercanas y permitir a los usuarios contactarlas desde la comodidad de su hogar. Utilizando el framework Ionic y la integración con Mapbox, Farmapp ofrece una experiencia intuitiva para localizar farmacias en tiempo real. Con un backend construido en Serverless Framework, la app asegura eficiencia y escalabilidad. El diseño de la aplicación, realizado en Figma, garantiza una experiencia de usuario fluida. Estoy trabajando en la app junto al equipo de Bricke, enfocados en mejorar la utilidad de Farmapp y preparándola para su lanzamiento. Farmapp tiene el potencial de convertirse en una herramienta esencial para quienes necesitan acceso rápido y cómodo a los servicios farmacéuticos.',
    },
    {
      id: 'heroesApp',
      title: 'Heroes Project',
      logo: 'assets/img/portfolio/angularLogo.png',
      description:
        'Este proyecto, desarrollado a partir de un curso de Udemy, utiliza TypeScript, Angular CLI y Bootstrap. Implementa el módulo HTTP para interactuar con los servicios RESTful de Firebase, realizando operaciones como POST, GET, DELETE y PUT. También incluye configuraciones en la consola de Firebase para gestionar los servicios y datos.',
    },
    {
      id: 'listaTareas',
      title: 'Listas Tareas en Node',
      logo: '../../../assets/img/portfolio/listaTareasLogo.jpg',
      description:
        'Este proyecto es una aplicación de consola interactiva desarrollada como parte de un curso de Udemy, utilizando Node.js como framework principal. La aplicación emplea paquetes como Inquirer y Yargs para crear una experiencia de usuario fluida y dinámica en la línea de comandos. Este enfoque permite manejar diversas operaciones de manera eficiente y con una interfaz amigable para el usuario.',
    },
  ];
}
