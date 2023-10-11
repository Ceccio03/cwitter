import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';

@Injectable({
  providedIn: 'root'
})
export class FireappService {
  app: FirebaseApp;

  constructor() {
    this.app = initializeApp(firebaseConfig);
  }
}