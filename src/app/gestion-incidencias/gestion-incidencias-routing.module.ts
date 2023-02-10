import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { ListaGestionIncidenciaComponent } from './detalleIncidencia/lista-gestion-incidencia.component';

const routes: Routes = [
{ path: '', component: GestionIncidenciasComponent },
{ path: 'gestionIncidencias/:id', component: ListaGestionIncidenciaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
