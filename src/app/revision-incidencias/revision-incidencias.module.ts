import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionIncidenciasRoutingModule } from './revision-incidencias-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias.component';
import { DetalleIncidenciaComponent } from './detalle-incidencia/detalle-incidencia.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';







@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    DetalleIncidenciaComponent
  ],
  imports: [
    CommonModule,
    RevisionIncidenciasRoutingModule,
    ReactiveFormsModule,
    MatButtonToggleModule
    
    
  ]
})
export class RevisionIncidenciasModule { }
