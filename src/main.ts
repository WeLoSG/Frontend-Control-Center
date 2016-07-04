import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
// import {enableProdMode} from '@angular/core';

import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig } from 'angular2-google-maps/core';
import { provide } from '@angular/core'
import { disableDeprecatedForms, provideForms } from '@angular/forms';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  //ngForms
  disableDeprecatedForms(),
  provideForms(),
  // add angular2-google-maps 
  GOOGLE_MAPS_PROVIDERS,
  provide(LazyMapsAPILoaderConfig, {useFactory: () => {
    let config = new LazyMapsAPILoaderConfig();
    config.apiKey = 'AIzaSyALKC1tljWTKklkQBusA89LXkcu5MxhW68';
    config.apiVersion = "3";
    config.language = "en";
    return config;
  }}),
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));