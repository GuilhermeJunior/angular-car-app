import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrodetails',
  imports: [],
  templateUrl: './carrodetails.component.html',
  styleUrl: './carrodetails.component.scss'
})
export class CarrodetailsComponent {

  carro: Carro = new Carro();
  carroService = inject(CarroService);

  activedRoute = inject(ActivatedRoute);

  constructor() {
    let id = this.activedRoute.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

   findById(id: number) {
    this.carroService.findById(id).subscribe({
      next: carro => {
        this.carro = carro;
      },
      error: erro => {
        console.error(erro);
      }
    });
   }
}
