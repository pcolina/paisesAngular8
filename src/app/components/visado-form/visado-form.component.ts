import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormularioService } from '../services/formulario.service';
import { PaisesService } from '../services/paises.service';
import { RestService } from '../services/rest.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-visado-form',
  templateUrl: './visado-form.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class VisadoFormComponent implements OnInit {
  // definicion de constantes
  // const minNamelength = 4;
  // const minEmaillength = 4;
  // Fin definicion de constantes


  tiposDoc = [];
  paisesList = [];
  provinciasList = [];
  prefijosList = [];
  paisesVisa = [];
  error: boolean;

  paisVisa = '';

  // validaciones num documento DNI: 9 00000000A | NIE: 9 A0000000A |Pasaporte: 10 AAA000000A
  minLenNumDoc = '9';
  maxLenNumDoc = '9';
  patternNumDoc = '';



  constructor(private activatedRoute: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _formularioService: FormularioService,
              // tslint:disable-next-line: variable-name
              private _paisesService: PaisesService,
              private _restService: RestService,
              private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.paisVisa = params.paisVisa;
      console.log('pais a tramitar visado', this.paisVisa);
    })


  }

  ngOnInit() {
    // CARGA COMPONENTES FORMULARIO
    // Cargamos los tipos de documentos
    this.tiposDoc = this._formularioService.getTipoDocu();

    // Cargamos el listado de paises
    // This.paisesList = this._formularioService.getPaisesList();
    // Console.log('listado: ' + this.paisesList);

    //new
    this.paisesList= this._restService.getPaisesRest();

    // Cargamos los paises en los que podemos tramitar visados
    this.paisesVisa = this._paisesService.getPaises();

    // cargamos prefijos
    this.prefijosList = this._formularioService.getprefijosList();
  }

  // Cargamos el listado de provincias o estados al seleccionar PAIS
  getProvincias(unPais: string) {
    this.provinciasList = this._formularioService.getProvincias(unPais);
    console.log('PROV: ' + this.provinciasList);

  }



  validacionesDoc(tipoDoc: string) {
    console.log('tipodoc ', tipoDoc);
    switch (tipoDoc) {
      case 'DNI': {
        // /^[XYZ]?\d{5,8}[A-Z]$/;
        // (([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))
        this.patternNumDoc = '[0-9]{8}([A-Z]|[a-z]){1}$';

        break;
      }
      case 'NIE': {
        this.patternNumDoc = '([A-Z]|[a-z]){1}[0-9]{5,8}([A-Z]|[a-z]){1}$';
        break;
      }


      case 'Pasaporte': {
        console.log('pasaporte seleccionado');

        this.minLenNumDoc = '10';
        this.maxLenNumDoc = '10';
        this.patternNumDoc = '([A-Z]|[a-z]){3}[0-9]{6}([A-Z]|[a-z])?$';
        break;
      }

      default: {
        console.log('Tipo de decumento erroneo');
        break;
      }

    }
  }


  submit(forma: NgForm) {
    console.log('Submit llamado ', forma);

    // Aqui tenemos todos los datos del formulario relleno y validado
    // La posible logica podria ser:
    // 1 almacenamiento de la peticion con estado 'SOLICITADO' (por si no realiza el pago enviarle correo pasado 1 hora)
    // 2 llevarle a la pagina de pago
    //   2.1 Si completa el pago actualizar estado a 'PAGADO'
    //   2.2 Si no completa el pago enviar email
  }


}
