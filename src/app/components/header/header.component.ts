import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { RouterModule } from '@angular/router';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: User | null = null;

  constructor(private authServ: AuthService) {
    this.authServ.firebaseUser.subscribe(firebaseUser => this.user = firebaseUser);
  }

  logout() {
    this.authServ.logOut();
  }
}
