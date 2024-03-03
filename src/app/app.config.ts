import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import moment from 'moment';
moment().format();
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
