import { Component, OnInit } from '@angular/core';
interface User {
  usuario: string;
  contrasenia: string;
}
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titulo = 'Login EduFree';
  loginUser : User = {usuario:'',contrasenia:''};

  constructor() { }

  ngOnInit(): void {
  }

  mostrarInput(): void {
    alert("Nombre de Ususario: " + this.loginUser.usuario);
  }
}
