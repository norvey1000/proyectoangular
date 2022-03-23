import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

import { TubingComponent } from './components/experiencias/tubing/tubing.component';
import { AltaguajiraComponent } from './components/experiencias/altaguajira/altaguajira.component';
import { ParquesnaturalesComponent } from './components/experiencias/parquesnaturales/parquesnaturales.component';
import { CiclismoComponent } from './components/experiencias/ciclismo/ciclismo.component';

import { ContactoComponent } from './components/contacto/contacto.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    GaleriaComponent,

    TubingComponent,
    AltaguajiraComponent,
    ParquesnaturalesComponent,
    CiclismoComponent,

    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
