import { Routes } from '@angular/router';
import { CarroListComponent } from './components/carro/carro-list/carro-list.component';
import { CarrodetailsComponent } from './components/carro/carrodetails/carrodetails.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "admin", component: PrincipalComponent , children: [
      { path: "carros", component: CarroListComponent },
      { path: "carros/:id", component: CarrodetailsComponent },
      { path: "carros/:id/edit", component: CarrodetailsComponent },
      { path: "carros/new", component: CarrodetailsComponent }
  ]}
];
