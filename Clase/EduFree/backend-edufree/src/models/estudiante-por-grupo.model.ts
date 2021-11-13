import {Entity, model, property} from '@loopback/repository';

@model()
export class EstudiantePorGrupo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  grupoID: string;

  @property({
    type: 'string',
    required: true,
  })
  usuarioId: string;

  @property({
    type: 'number',
    required: true,
  })
  calificacion: number;


  constructor(data?: Partial<EstudiantePorGrupo>) {
    super(data);
  }
}

export interface EstudiantePorGrupoRelations {
  // describe navigational properties here
}

export type EstudiantePorGrupoWithRelations = EstudiantePorGrupo & EstudiantePorGrupoRelations;
