import { Component, OnInit } from '@angular/core';
import { PaisesService, Pais } from '../services/paises.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  paises: Pais[] = [];
  terminoBusqueda: string;

  // tslint:disable-next-line: variable-name
  constructor( private  _paisesService: PaisesService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.term);
      this.terminoBusqueda = params.term;
      this.paises = this._paisesService.buscarPais(params.term);
    });
  }


  verPais( idx: number){
    console.log('Ver pais : ', idx);
    this.router.navigate (['/pais', idx] );
  }
}
