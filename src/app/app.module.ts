import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Rutas
import { APPROUTING } from './app.routes';
 

// Servicios
import { PaisesService } from './components/services/paises.service';
import { FormularioService } from './components/services/formulario.service';
import { RestService } from './components/services/rest.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisComponent } from './components/pais/pais.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ɵNgClassR2Impl } from '@angular/common';
import { VisadoFormComponent } from './components/visado-form/visado-form.component';
import { PaisTarjetaComponent } from './components/pais-tarjeta/pais-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PaisesComponent,
    PaisComponent,
    BuscadorComponent,
    VisadoFormComponent,
    PaisTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APPROUTING

  ],
  providers: [
    PaisesService,
    FormularioService,
    RestService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
