import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private http = inject(HttpClient);
  private API = 'http://localhost:8080/api/cars'

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API);
  }

  findById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.API}/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<Carro>(`${this.API}/${id}`);
  }

  constructor() { }
}
