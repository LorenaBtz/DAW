import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Credenciales } from '../models/credenciales.model';
import { Usuario } from '../models/usuario.model';
import { UsuarioRepository } from '../repositories/usuario.repository';

const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class SeguridadService {
  constructor(
    @repository(UsuarioRepository) 
    public usuarioRepository: UsuarioRepository
  ) {}

  async ValidarUsuario(credenciales: Credenciales){
    try {
      const usuarioEncontrado = await this.usuarioRepository.findOne({
        where: {
          usuario: credenciales.usuario,
          contrasenia: credenciales.contrasenia
        }
      });

      if(usuarioEncontrado){
        return usuarioEncontrado;
      } else {
        return null;
      }

    } catch (error) {
      console.log(error);
    }
  }

  // async GenerarToken(usuario: Usuario){
  //   const token = jwt.sign(
  //     data: {
  //       usuario: usuario.usuario,
  //       contrasenia: usuario.contrasenia,
  //       perfil: usuario.rol
  //     },
  //     'sS65yu78Sjku85664'
  //   );

  //   return token;
  // }
}