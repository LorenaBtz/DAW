import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramasEnOfertaComponent } from './programas-en-oferta/programas-en-oferta.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'i',
    component: AppComponent,
  },
  {
    path: 'inscripciones',
    component: InscripcionesComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'programas-en-oferta',
    component: ProgramasEnOfertaComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
