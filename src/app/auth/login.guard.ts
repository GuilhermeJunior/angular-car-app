import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginService);

  if (loginService.hasRole("ROLE_USER") && state.url == '/admin/usuarios') {
    alert('Rota não permitida');
    return false; // nao ativa rota
  }

  return true;
};
