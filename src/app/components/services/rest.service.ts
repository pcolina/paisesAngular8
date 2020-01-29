import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

    paises: any[] = [];

    constructor(private http: HttpClient) {

     
    }

    getPaisesRest()  {
       return this.http.get('https://restcountries.eu/rest/v2/regionalbloc/asean');
        
      
    }

    // .subscribe((respu: any) => {
    //     this.paisesRest = respu;
    //     console.log('Respuesta getPaisesRest:inside ', respu);


    // });

    etpaisesRestByRegion(reg:string){

    }
}