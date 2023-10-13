import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authS = inject(AuthService);
  const router = inject(Router);
  if (authS.firebaseUser.value) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};