import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  root = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  /**
   * @param Controller: Punto de acceso del servicio del backend
   * @returns  Observable de respuesta del servicio
   */
  getRequest(ruta: string): Observable<any> {
    return this.http.get(this.root + ruta)
  }
}
