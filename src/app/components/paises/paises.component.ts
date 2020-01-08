import { Component, OnInit } from '@angular/core';
import { PaisesService } from "../services/paises.service";

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent implements OnInit {

  constructor( _paisesService:PaisesService ) { }

  ngOnInit() {
  }

}
