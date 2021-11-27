import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/services/backend.service';

interface Programa {
  nombrePrograma: string,
  nivelAcademico: string,
  modalidad: string,
  cantidadSemestres: string,
  cantidadCreditos: number,
  costo: string,
  imagen: string,
  descripcion: string
}

@Component({
  selector: 'app-programas-en-oferta',
  templateUrl: './programas-en-oferta.component.html',
  styleUrls: ['./programas-en-oferta.component.scss']
})
export class ProgramasEnOfertaComponent implements OnInit {

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