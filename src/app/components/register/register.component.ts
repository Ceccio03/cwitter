import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { OurUser } from 'src/app/models/our-user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: [''],
    email: [''],
    psw: ['']
  });
  constructor(private fb: FormBuilder, private authServ: AuthService) {}

  onSubmit() {
    const email = this.registerForm.value.email;
    const psw = this.registerForm.value.psw;
    const ourUser: OurUser = {
      username: this.registerForm.value.username!
    }

    this.authServ.registerUser(ourUser, email!, psw!);
  }
}