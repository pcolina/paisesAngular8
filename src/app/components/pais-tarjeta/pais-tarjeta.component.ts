import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {   Pais } from '../services/paises.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-pais-tarjeta',
  templateUrl: './pais-tarjeta.component.html'
})
export class PaisTarjetaComponent implements OnInit {

  @Input() pais: any = {};
  @Input() nombre: string;

  @Output() paisSelec: EventEmitter<number>;

  constructor( private router: Router) {

    this.paisSelec = new EventEmitter();
   }

  ngOnInit() {
  }

  verPais() {
    this.paisSelec.emit( this.nombre);
  }

}
