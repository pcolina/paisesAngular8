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
  error = false;
  // tslint:disable-next-line: typedef-whitespace
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               // tslint:disable-next-line: variable-name
               private _paisesService: PaisesService) {

    this.activatedRoute.params.subscribe( params => {
      console.log('params.name ', params.nombre);
      
      this.pais = this._paisesService.getPais( params.nombre);
      console.log('pais::: ', this.pais);
      if (this.pais == null){
        console.log('pais no encontrado');
        this.error = true;
        
      }
    });
  }

  tramitarVisado(paisVisa: string) {
    console.log('Solicitar visado de ', paisVisa);
    this.router.navigate (['/visado-form', paisVisa] );
  }

}
