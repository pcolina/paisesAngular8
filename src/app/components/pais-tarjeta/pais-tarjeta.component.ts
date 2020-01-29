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

  @Output() paisSelec: EventEmitter<string>;

  constructor( private router: Router) {

    this.paisSelec = new EventEmitter();
   }

  ngOnInit() {
  }

  verPais() {
    console.log('NOMBRE ', this.nombre);
    
    this.paisSelec.emit( this.nombre);
  }

}
