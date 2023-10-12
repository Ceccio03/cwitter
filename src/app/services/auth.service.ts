import { Injectable } from '@angular/core';
import { FireappService } from './fireapp.service';
import { Auth, User, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { OurUser } from '../models/our-user';
import { FirestoreService } from './firestore.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth;
  ourUser = new BehaviorSubject<OurUser | null>(null);
  firebaseUser = new BehaviorSubject<User | null>(null);

  constructor(private fireApp: FireappService, private firestore: FirestoreService) {
    this.auth = getAuth(this.fireApp.app);

    onAuthStateChanged(this.auth, (user) => {
      console.log('autenticazione combiata');
      
      if (user) {
        const uid = user.uid;

        this.firebaseUser.next(user);
        this.firestore.getOurUser(uid).then(ourU => {
          this.ourUser.next(ourU.data() as OurUser);
        })
      } else {
        this.firebaseUser.next(null);
        this.ourUser.next(null);
      }
    });
  }

  registerUser(newUser: OurUser, email: string, psw: string) {
    createUserWithEmailAndPassword(this.auth, email, psw)
      .then((userCredential) => { 
        const user = userCredential.user;

        this.firestore.postOurUser(newUser, user.uid).then(() => {
          this.ourUser.next(newUser);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('errore di registrazione', error.code, error.message);
      });
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => { 
      const user = userCredential.user;

      console.log('login eseguita', user);

      this.firestore.getOurUser(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log('errore', error.code, error.message);
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