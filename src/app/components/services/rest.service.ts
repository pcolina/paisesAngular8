import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

    paisesRest: any[] = [];
    paises: any[] = [];

    constructor(private http: HttpClient) {

     
    }

    getPaisesRest() {
        this.http.get('https://restcountries.eu/rest/v2/region/asia').subscribe((respu: any) => {
            this.paisesRest = respu;
            console.log('Respuesta getPaisesRest:inside ', respu);


        });
       
        return this.paises;

    }

    etpaisesRestByRegion(reg:string){

    }
}