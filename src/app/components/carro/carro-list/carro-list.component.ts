import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carro.service';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

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

  findAll() {
      this.carroService.findAll().subscribe({
      next: carros => {
        this.carros = carros;
      },
      error: erro => {
        console.log(erro);
      }
    });
  }

  ngOnInit() {
   this.findAll();
  }

  deletar(id: number) {
    Swal.fire({
      title: "Tem certeza que deseja deletar o registro?",
      icon: "warning",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carroService.deleteById(id).subscribe({
          next: () => {
            this.findAll();
            Swal.fire({
              title: "Deletado com Sucesso",
              icon: "success",
              confirmButtonText: 'Ok'
            });
          },
          error: (erro) => {
            Swal.fire({
            title: "Erro!",
            text: "Something went wrong!" + erro,
            icon: "error"
          });
          }
        });
      }
    });
  }
}
