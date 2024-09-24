import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpProviderService } from './service/http-provider.service';
import { WebApiService } from './service/web-api.service';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimationsAsync(),
    importProvidersFrom(FormsModule, ReactiveFormsModule), // Provides the form capabilities (Reactive Forms)
    provideHttpClient(withFetch()), // Provides the HttpClient functionality
    HttpProviderService, // Provide your services here
    WebApiService, provideAnimationsAsync(), // Provide your WebApiService here
  ]
};
