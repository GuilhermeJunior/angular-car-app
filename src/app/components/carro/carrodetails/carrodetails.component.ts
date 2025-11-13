import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { CarroService } from '../../../services/carro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-carrodetails',
  imports: [FormsModule],
  templateUrl: './carrodetails.component.html',
  styleUrl: './carrodetails.component.scss'
})
export class CarrodetailsComponent {

  carro: Carro = new Carro();
  carroService = inject(CarroService);
  activedRoute = inject(ActivatedRoute);
  router = inject(Router);
  backendErrors: any = {};

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

  salvar(carro: Carro) {
    if (carro.id == null) {
      // criar carro
      this.carroService.save(carro).subscribe({
        next: () => {
          Swal.fire({
            title: "Salvo com Sucesso!",
            icon: "success",
            confirmButtonText: 'Ok'
          });
          this.backendErrors = {};
          this.router.navigate(['/carros']);
        },
        error: erro => {
       this.backendErrors = {};
            erro.error.errors.forEach((e: any) => {
              this.backendErrors[e.field] = e.message;
            });
        }
      });
    } else {
      // editar carro
        this.carroService.update(carro).subscribe({
        next: () => {
        Swal.fire({
            title: "Editado com Sucesso!",
            icon: "success",
            confirmButtonText: 'Ok'
          });
          this.router.navigate(['/carros']);
        },
        error: erro => {
          Swal.fire({
                      title: "Erro!",
                      text: "Something went wrong!" + erro,
                      icon: "error"
                    });
        }
      });
    }
   }
}
