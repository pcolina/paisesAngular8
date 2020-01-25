import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService, Pais } from '../services/paises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: []
})
export class PaisComponent  {

  pais: Pais ;

  // tslint:disable-next-line: typedef-whitespace
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _paisesService: PaisesService) {

    this.activatedRoute.params.subscribe( params => {
      this.pais = this._paisesService.getPais( params.nombre);
      console.log('pais::: ', this.pais);
    });
  }

  tramitarVisado(paisVisa: string) {
    console.log('Solicitar visado de ', paisVisa);
    this.router.navigate (['/visado-form', paisVisa] );
  }

}
