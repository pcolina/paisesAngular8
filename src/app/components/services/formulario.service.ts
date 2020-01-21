import { Injectable } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';


@Injectable()
export class FormularioService {

    private paisesList: string[] = [ "Germany",  "Spain",  "United States"];

private provinciasEspList: string[] = ["Alava", "Albacete", "Alicante", "Almeria", "Asturias", "Avila", "Barcelona", "Madrid"];
private provinciasUSAList: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Carolina del Norte", "BaCarolina del Sur"];

private tipoDoc:String[] = ["DNI","Pasaporte"];

    constructor() { 

        console.log("Servicio listo para usarse");
    }

    getTipoDocu():string[]{
        return this.tipoDoc;
    }
   
     getPaisesList(): string[]{
        //return this.paisesList;
        console.log("getpaisesList()");
        return this.paisesList;
    } 

    getProvincias(paisN:string){
        console.log("PAIS:  "+paisN);
        ;
       switch(paisN) { 
            case 'Spain': { 
               return this.provinciasEspList;
               break; 
            } 
            case 'United States': { 
                return  this.provinciasUSAList;
               break; 
            } 
           
         }  
         return null;
    }
    
 
  
}
