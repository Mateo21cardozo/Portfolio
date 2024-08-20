import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  // public projects: any[] = [];
  public projects: any[] = [
    {
      id: 'bricke',
      title: 'Bricke',
      logo: 'assets/img/portfolio/logo.svg',
      description:
        'At Bricke, an e-commerce platform dedicated to the exchange and sale of products between individuals, I work as a junior front-end developer. My responsibilities include problem analysis, defining use cases, and other related tasks. I use Angular for front-end development and Figma for designing views. The team consists of a technical lead front-end developer, two back-end developers, a product designer, and a tester. We use Kanban methodologies and manage the project through Trello.',
    },
    {
      id: 'serverless',
      title: 'Serverless Project',
      logo: 'assets/img/portfolio/serverlessLogo.png',
      description:
        'This project uses technologies such as Serverless and AWS Lambda for the back-end, and Angular CLI for the front-end, with JavaScript as the main language. The application focuses on the presentation and management of Dragon Ball characters. It connects to a Lambda function that consumes a Dragon Ball API to retrieve and manage information about the characters.',
    },
    {
      id: 'spotiApp',
      title: 'SpotiApp Project',
      logo: 'assets/img/portfolio/spotiappLogo.jpg',
      description:
        'This project, developed from a Udemy course, uses Angular and Bootstrap to create an application that consumes the Spotify API. It includes route and parameter management in Angular, carousels with Bootstrap 4, and data retrieval about artists, albums, and audio via HTTP. Additionally, it handles asynchronous data with observables, binds text fields using ngModel, and offers Spotify widgets and audio playback with HTML5, as well as map integration.',
    },
    {
      id: 'acyac',
      title: 'Acyac',
      logo: 'assets/img/portfolio/PHP-logo.png',
      description:
        'ACyac is a website designed to manage events at a popular library and event hall. The site allows for CRUD operations (Create, Read, Update, and Delete) on events. The interface has been developed using Bootstrap, and the event data is stored in a local database hosted on a XAMPP server. The connection between the database and the application is made via PHP.',
    },

    {
      id: 'formularios',
      title: 'Formularios Templates y Reactivos',
      logo: 'assets/img/portfolio/formularioLogo.png',
      description:
        'This project in Angular CLI uses a country API to demonstrate form handling, including the use of `ngModel`, predefined and custom validations, and asynchronous validations. It also covers form submission with `ngSubmit`, sending data only when the form is valid, creating forms in the component, loading default information, and subscribing to changes in form values.',
    },

    {
      id: 'theweekend',
      title: 'the Weekend Project',
      logo: 'assets/img/portfolio/theweekendLogo.png',
      description:
        'The Weekend is software designed to manage appointments at a barbershop of the same name. The project features a local backend developed in JSON and is built using Bootstrap for the website design. The application connects to a local Node.js backend, allowing users to book appointments through reservation forms and complete satisfaction surveys to evaluate their experience.',
    },

    {
      id: 'farmapp',
      title: 'FarmApp',
      logo: 'assets/img/portfolio/farmappLogo.png',
      description:
        "Farmapp is an application in development designed to facilitate the search for nearby on-duty pharmacies and allow users to contact them from the comfort of their homes. Using the Ionic framework and integration with Mapbox, Farmapp offers an intuitive experience for locating pharmacies in real time. With a backend built on Serverless Framework, the app ensures efficiency and scalability. The app’s design, created in Figma, guarantees a smooth user experience. I am working on the app with the Bricke team, focused on enhancing Farmapp's utility and preparing it for launch. Farmapp has the potential to become an essential tool for those needing quick and convenient access to pharmaceutical services.",
    },
    {
      id: 'heroesApp',
      title: 'Heroes Project',
      logo: 'assets/img/portfolio/angularLogo.png',
      description:
        "This project, developed from a Udemy course, uses TypeScript, Angular CLI, and Bootstrap. It implements the HTTP module to interact with Firebase's RESTful services, performing operations like POST, GET, DELETE, and PUT. It also includes configurations in the Firebase console to manage services and data.",
    },
    {
      id: 'listaTareas',
      title: 'Listas Tareas en Node',
      logo: 'assets/img/portfolio/listaTareasLogo.jpg',
      description:
        'This project is an interactive console application developed as part of a Udemy course, using Node.js as the main framework. The application employs packages like Inquirer and Yargs to create a smooth and dynamic user experience in the command line. This approach allows for handling various operations efficiently with a user-friendly interface.',
    },
  ];
  constructor() {}
}
