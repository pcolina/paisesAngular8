import { Component, OnInit } from '@angular/core';
import { PaisesService, Pais } from '../services/paises.service';
import { RestService } from '../services/rest.service';

import { Router } from '@angular/router';
// tslint:disable-next-line: quotemark

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent implements OnInit {

   paises: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private  _paisesService: PaisesService,
    private _restService: RestService,
    private router: Router) {
    console.log('Constructor Paises');
   }

  ngOnInit() { 
    this.paises = this._restService.getPaisesRest();
    console.log('ngoninit', this.paises);

  }

  verPais( nombre: string) {
    console.log('Ver pais : ', nombre);
    this.router.navigate (['/pais', nombre] );
  }

}
