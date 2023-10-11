import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, getFirestore } from "firebase/firestore";
import { FireappService } from './fireapp.service';

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

  // initDb(app: any) {
  //   this.db = getFirestore(app);
  // }
}