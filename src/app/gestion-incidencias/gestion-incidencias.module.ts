import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaGestionIncidenciaComponent } from './lista-gestion-incidencia/lista-gestion-incidencia.component';


@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    ListaGestionIncidenciaComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    ReactiveFormsModule
  ]
})
export class GestionIncidenciasModule { }
