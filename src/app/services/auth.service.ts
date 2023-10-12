import { Injectable } from '@angular/core';
import { FireappService } from './fireapp.service';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { OurUser } from '../models/our-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth;

  constructor(private fireApp: FireappService) {
    this.auth = getAuth(this.fireApp.app);

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {

      }
    });
  }

  registerUser(newUser: OurUser) {
    createUserWithEmailAndPassword(this.auth, newUser.email, newUser.psw)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  logOut() {
    signOut(this.auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


}