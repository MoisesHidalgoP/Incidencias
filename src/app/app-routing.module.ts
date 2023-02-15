import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

 

const routes: Routes = [

{ path: 'incidencias', loadChildren: () => import('./incidencias/incidencias.module').then(m => m.IncidenciasModule) },
  
{ path: 'gestionIncidencias', loadChildren: () => import('./gestion-incidencias/gestion-incidencias.module').then(m => m.GestionIncidenciasModule) },
  
{ path: 'revisionIncidencias', loadChildren: () => import('./revision-incidencias/revision-incidencias.module').then(m => m.RevisionIncidenciasModule) },

{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },

{ path: 'login', component: LoginComponent },

{ path: '**', redirectTo: '/', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
