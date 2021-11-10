import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apllido: string;

  @property({
    type: 'string',
    required: true,
  })
  correo_institucional: string;

  @property({
    type: 'string',
    required: true,
  })
  lefoo: string;

  @property({
    type: 'string',
    required: true,
  })
  no_identificacion: string;

  @property({
    type: 'string',
  })
  clave?: string;

  @property({
    type: 'string',
    required: true,
  })
  rol: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
