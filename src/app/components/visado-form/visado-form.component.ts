import { Component, OnInit } from '@angular/core';
import { FormularioService } from "../services/formulario.service";
import { PaisesService } from "../services/paises.service";
import { Router } from "@angular/router";

import { NgForm  } from "@angular/forms"

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
//definicion de constantes
//const minNamelength = 4;
//const minEmaillength = 4;
//Fin definicion de constantes 


   tiposDoc = [];
   paisesList = [];
   provinciasList = [];
   prefijosList = [];
   paisesVisa = [];
  error: boolean;
  
  //validaciones num documento DNI: 9 00000000A | NIE: 9 A0000000A |Pasaporte: 10 AAA000000A
  minLenNumDoc: string ="9";
  maxLenNumDoc: string ="9";
  patternNumDoc: string ="";



  constructor( 
    private  _formularioService: FormularioService,
    private  _paisesService: PaisesService,
    private router:Router) { 

     
    }

  ngOnInit() {
 
      //Cargamos los tipos de documentos
      this.tiposDoc = this._formularioService.getTipoDocu();
      // Cargamos el listado de paises
      this.paisesList = this._formularioService.getPaisesList();
      console.log('listado: ' +  this.paisesList);

      // Cargamos los paises en los que podemos tramitar visados
      this.paisesVisa = this._paisesService.getPaises();

      //cargamos prefijos
      this.prefijosList = this._formularioService.getprefijosList(); 
      
      // if this.registerForm.controls
      
    }

      // Cargamos el listado de provincias o estados
      getProvincias( unPais: string){
        this.provinciasList = this._formularioService.getProvincias(unPais); 
        console.log("PROV: "+ this.provinciasList);
        
      }

     

      validacionesDoc(tipoDoc: string ){
        console.log("tipodoc ", tipoDoc);
  switch (tipoDoc) {
    case "DNI":{
      ///^[XYZ]?\d{5,8}[A-Z]$/;
      //(([X-Z]{1})([-]?)(\d{7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]{1}))
      this.patternNumDoc = "[0-9]{8}([A-Z]|[a-z]){1}$";
      
      break;
    }  
     case "NIE":{
      this.patternNumDoc =  "([A-Z]|[a-z]){1}[0-9]{5,8}([A-Z]|[a-z]){1}$";
      break;
    }

    
    case "Pasaporte":{
      console.log("pasaporte seleccionado");
      
      this.minLenNumDoc = "10";
      this.maxLenNumDoc = "10";
      this.patternNumDoc = "([A-Z]|[a-z]){3}[0-9]{6}([A-Z]|[a-z])?$";
      break;
    }

    default: {
      console.log("Tipo de decumento erroneo");
      break;
    }
      
  }
      }
       

       //Cargamos los tipos de documentos

       // cargamos los paises en los que ofrecemos la tramitacion de visado
       
       // Cargamos prefijos internacionales

       // Es posible que tenga que crear objeto PaisVisado con atributos como tipologia de visados, modos de visado  y precios      
 

       submit(forma: NgForm){
         let errorTxt:string ="";
         console.log("Submit llamado");
         console.log( forma );
         
        //  if (this.registerForm.controls.nombre.status === 'INVALID'){
        //    this.error = true;
           
        //  }
        
         
       }


}
