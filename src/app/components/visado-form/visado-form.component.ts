import { Component, OnInit } from '@angular/core';
import { FormularioService } from "../services/formulario.service";
import { PaisesService } from "../services/paises.service";
import { Router } from "@angular/router";

import { FormBuilder, ReactiveFormsModule, Validators  } from "@angular/forms"

@Component({
  selector: 'app-visado-form',
  templateUrl: './visado-form.component.html'
})
export class VisadoFormComponent implements OnInit {
//definicion de constantes
//const minNamelength = 4;
//const minEmaillength = 4;
//Fin definicion de constantes 


   tiposDoc = [];
   paisesList = [];
   provinciasList = [];

   paisesVisa = [];

  constructor(private formBuilder: FormBuilder, 
    private  _formularioService: FormularioService,
    private  _paisesService: PaisesService,
    private router:Router) { 

    }

    registerForm = this.formBuilder.group({
      

      nombre: ['', Validators.required ],
      email: ['', Validators.required ],
      tipoDoc: [''],
      numDoc: [''],
      paisNac: [''],
      prov: [''],
      prefijo: [''],
      telefono: [''],
      paisVisa: [''],
      tipoVisa: [''],
      modoVisa: [''],
   });
  ngOnInit() {
  
      //Cargamos los tipos de documentos
      this.tiposDoc = this._formularioService.getTipoDocu();
      // Cargamos el listado de paises
      this.paisesList = this._formularioService.getPaisesList();
      console.log('listado: ' +  this.paisesList);

      // Cargamos los paises en los que podemos tramitar visados
      this.paisesVisa = this._paisesService.getPaises();
      
    }

      // Cargamos el listado de provincias o estados
      getProvincias( unPais: string){
        this.provinciasList = this._formularioService.getProvincias(unPais); 
        console.log("PROV: "+ this.provinciasList);
        
      }
       

       //Cargamos los tipos de documentos

       // cargamos los paises en los que ofrecemos la tramitacion de visado
       
       // Cargamos prefijos internacionales

       // Es posible que tenga que crear objeto PaisVisado con atributos como tipologia de visados, modos de visado  y precios      
 

       submit(){
         console.log(this.registerForm.value);
         
       }


}
