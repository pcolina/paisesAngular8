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
   paisesRest: any[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private  _paisesService: PaisesService,
    private _restService: RestService,
    private router: Router) {
    console.log('Constructor Paises');
     this._restService.getPaisesRest()
     .subscribe( data=> {
       console.log(data);
       
      this.paisesRest = data;

     });
    console.log('constructor', this.paises);
   }

  ngOnInit() { 
    
   

  }

  verPais( name: string) {
    console.log('Ver pais : ', name);
    this.router.navigate (['/pais', name] );
  }

}
