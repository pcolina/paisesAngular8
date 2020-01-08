import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PaisesComponent } from "./components/paises/paises.component";



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES, { useHash:true});

 