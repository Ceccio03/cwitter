import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Cwit } from 'src/app/models/cwit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cwits: Cwit[] = [];
  
  constructor(private firestore: FirestoreService) {}

  ngOnInit(): void {
    this.firestore.getCwits().then(data => {
      this.cwits = data as Cwit[];
    });
  }
}
