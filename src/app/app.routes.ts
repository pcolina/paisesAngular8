import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisComponent } from './components/pais/pais.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VisadoFormComponent } from './components/visado-form/visado-form.component';
 


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'buscar/:term', component: BuscadorComponent },
    { path: 'pais/:nombre', component: PaisComponent },
    { path: 'visado-form', component: VisadoFormComponent },
    { path: 'visado-form/:paisVisa', component: VisadoFormComponent }, //Pendiente de unificar con la opcion anterior TODO
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    
];

export const APPROUTING = RouterModule.forRoot(ROUTES, { useHash: true});

 