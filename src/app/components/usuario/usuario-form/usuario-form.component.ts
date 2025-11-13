import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-usuario-form',
  imports: [FormsModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.scss'
})
export class UsuarioFormComponent {
    usuario: User = new User();
    activedRoute = inject(ActivatedRoute);
    usuarioService = inject(UsuarioService);

    constructor() {
    let id = this.activedRoute.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: any) {
    this.usuarioService.findById(id).subscribe({
      next: usuario => {
        this.usuario = usuario;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
