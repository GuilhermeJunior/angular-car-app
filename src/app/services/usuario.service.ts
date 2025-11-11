import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  http = inject(HttpClient);

  API = 'http://localhost:8080/api/usuarios'

  constructor() { }

   findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.API);
    }

  findById(id: number): Observable<User> {
    return this.http.get<User>(`${this.API}/${id}`)
  }
}
