import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { FireappService } from './fireapp.service';
import { OurUser } from '../models/our-user';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  db: Firestore;

  constructor(private fireApp: FireappService) {
    this.db = getFirestore(this.fireApp.app);
  }

  getCwits() {
    const cwits = collection(this.db, 'cwit');
    
    return getDocs(cwits).then(snap => snap.docs.map(doc => {
      return {
        text: doc.data()['text'],
        url: doc.data()['url'],
        author: doc.data()['author'],
        creationTime: doc.data()['creationTime']
      }
    }));
  }

  postOurUser(ourUser: OurUser, uid: string) {
    const docUrl = doc(this.db, 'user', uid);

    return setDoc(docUrl, ourUser);
  }
  
  getOurUser(uid: string) {
    const docUrl = doc(this.db, 'user', uid);

    return getDoc(docUrl);
  }

  // initDb(app: any) {
  //   this.db = getFirestore(app);
  // }
}