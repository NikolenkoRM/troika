import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'troika-ce0f3',
        appId: '1:341027318710:web:50a00bcd549a27d83cef17',
        storageBucket: 'troika-ce0f3.appspot.com',
        apiKey: 'AIzaSyB5AB943pDQLHTAjfPYFx9YLSO7DzQvIQ0',
        authDomain: 'troika-ce0f3.firebaseapp.com',
        messagingSenderId: '341027318710',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
