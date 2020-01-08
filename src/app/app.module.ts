import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APPROUTING } from "./app.routes";
 

// Servicios
import { PaisesService } from "./components/services/paises.service";

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PaisesComponent } from './components/paises/paises.component';
import { ɵNgClassR2Impl } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING

  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
