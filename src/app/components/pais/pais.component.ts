import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: []
})
export class PaisComponent  {

  pais:any = {};

  constructor( private activatedRoute: ActivatedRoute,
                private _paisesService: PaisesService) { 
 
    this.activatedRoute.params.subscribe( params => {
      this.pais = this._paisesService.getPais( params['id']);
      console.log(this.pais);
    })
  }

   
}
