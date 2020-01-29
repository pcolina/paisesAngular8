import { Injectable } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';


@Injectable()
export class FormularioService {

    private paisesList: string[] = [ "Germany",  "Spain",  "United States", "France"];
    private prefijoTelList: string[] = [ "(00)49",  "(00)34",  "(00)1"];

private provinciasEspList: string[] = ["Alava", "Albacete", "Alicante", "Almeria", "Asturias", "Avila", "Barcelona", "Madrid"];
private provinciasUSAList: string[] = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Carolina del Norte", "BaCarolina del Sur"];

private tipoDoc: string[] = ["DNI","NIE","Pasaporte"];

    constructor() { 

        console.log("Servicio listo para usarse");
    }

    getTipoDocu(): string[] {
        return this.tipoDoc;
    }
   
     getPaisesList(){
        //return this.paisesList;
        console.log('getpaisesList() ', this.paisesList);
       return this.paisesList;
    } 

    getprefijosList(): string[]{
        return this.prefijoTelList;
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
