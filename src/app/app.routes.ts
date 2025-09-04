import { Routes } from '@angular/router';
import { CarroListComponent } from './components/carro/carro-list/carro-list.component';
import { CarrodetailsComponent } from './components/carro/carrodetails/carrodetails.component';

export const routes: Routes = [
  { path: "", redirectTo: "carros", pathMatch: 'full' },
  { path: "carros", component: CarroListComponent },
  { path: "carros/:id", component: CarrodetailsComponent },
  { path: "carros/new", component: CarrodetailsComponent }
];
