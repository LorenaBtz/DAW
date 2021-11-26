import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/services/backend.service';

interface Programa {
  nombrePrograma: string
}

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {

  listaProgramas: Programa[] = [];

  constructor(private servicioBackend: BackendService) {
    this.servicioBackend.getRequest('/programas-academicos').subscribe(
      {
        next: (data) => {
          console.log('Datos Obtenidos');
          this.listaProgramas = data;
        },
        error: (e) => {
          alert('Error');
        },
        complete: () => {
          console.log('Proceso Completado');
        },
      }
    );
  }
  ngOnInit(): void { }
}