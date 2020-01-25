import { Component, OnInit } from '@angular/core';
import { PaisesService, Pais } from '../services/paises.service';

import { Router } from '@angular/router';
// tslint:disable-next-line: quotemark

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent implements OnInit {

   paises: Pais[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private  _paisesService: PaisesService,
    private router: Router) {
    console.log('Constructor');
   }

  ngOnInit() {
    console.log('ngoninit');
    this.paises = this._paisesService.getPaises();
    console.log(this.paises);

  }

  verPais( nombre: string) {
    console.log('Ver pais : ', nombre);
    this.router.navigate (['/pais', nombre] );
  }

}
