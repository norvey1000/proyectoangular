import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TubingComponent } from './components/experiencias/tubing/tubing.component';
import { AltaguajiraComponent } from './components/experiencias/altaguajira/altaguajira.component';
import { ParquesnaturalesComponent } from './components/experiencias/parquesnaturales/parquesnaturales.component';
import { CiclismoComponent } from './components/experiencias/ciclismo/ciclismo.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'altaguajira',
    component: AltaguajiraComponent
  },
  {
    path: 'parquesnaturales',
    component: ParquesnaturalesComponent
  },
  {
    path: 'tubing',
    component: TubingComponent
  },
  {
    path: 'ciclismo',
    component: CiclismoComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
