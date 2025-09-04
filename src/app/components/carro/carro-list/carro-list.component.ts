import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carro.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-carro-list',
  imports: [RouterLink],
  templateUrl: './carro-list.component.html',
  styleUrl: './carro-list.component.scss'
})
export class CarroListComponent {

  carros: Carro[] = [];
  carroService = inject(CarroService);
  router = inject(Router);

  ngOnInit() {
    this.carroService.findAll().subscribe({
      next: carros => {
        this.carros = carros;
      },
      error: erro => {
        console.log(erro);
      }
    });
  }

}
