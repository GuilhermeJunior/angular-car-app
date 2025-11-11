import { Component, inject } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { RouterLink } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-usuario-list',
  imports: [ RouterLink ],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.scss'
})
export class UsuarioListComponent {
  usuarios: User[] = [];
  usuarioService = inject(UsuarioService);

  ngOnInit() {
   this.findAll();
  }

  findAll() {
    this.usuarioService.findAll().subscribe({
      next: users => {
        this.usuarios = users;
      },
      error: err => {
        console.log(err);
      }
      })
    };

}
