import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: [''],
    psw: ['']
  });
  constructor(private fb: FormBuilder, private authServ: AuthService) {}

  onSubmit() {
    const email = this.loginForm.value.email;
    const psw = this.loginForm.value.psw;

    this.authServ.login(email!, psw!);
  }
}