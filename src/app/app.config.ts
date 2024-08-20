import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importar provideHttpClient
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Configuración de ZoneChangeDetection
    provideRouter(routes), // Configuración del enrutador
    provideHttpClient(), // Agregar HttpClient
  ],
};
