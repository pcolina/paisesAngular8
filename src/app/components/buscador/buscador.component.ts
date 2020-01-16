import { Component, OnInit } from '@angular/core';
import { PaisesService, Pais } from "../services/paises.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  paises: Pais[] = [];
  terminoBusqueda:string;

  constructor( private  _paisesService: PaisesService, private activatedRoute: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      console.log(params['term']);
      this.terminoBusqueda = params['term'];
      this.paises = this._paisesService.buscarPais(params['term']);
      
    })
  }

}
