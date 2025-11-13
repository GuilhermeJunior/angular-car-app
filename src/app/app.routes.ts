import { Routes } from '@angular/router';
import { CarroListComponent } from './components/carro/carro-list/carro-list.component';
import { CarrodetailsComponent } from './components/carro/carrodetails/carrodetails.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { loginGuard } from './auth/login.guard';

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "admin", component: PrincipalComponent, canActivate: [loginGuard] , children: [
      { path: "carros", component: CarroListComponent },
      { path: "carros/:id", component: CarrodetailsComponent },
      { path: "carros/:id/edit", component: CarrodetailsComponent },
      { path: "carros/new", component: CarrodetailsComponent },
      { path: "usuarios", component: UsuarioListComponent },
      { path: "usuarios/:id", component: UsuarioFormComponent },
  ]}
];
