import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class PaisesService {

    private paises: Pais[] = [
        {
            nombre: "China",
            bio: "El Pais más grande de oriente sin contar con Rusia, y el tercero más extenso del mundo. Buena comunicación interna con varias compañias aereas. El paisaje chino es vasto y diverso, desde las estepas y los desiertos del Gobi y Taklamakán en el árido norte hasta los bosques subtropicales en el húmedo sur. Las cordilleras montañosas del Himalaya, el Karakórum, Pamir y Tian Shan la separan del sur y el centro de Asia. Los ríos Yangtsé y Amarillo, tercero y sexto más largos del mundo, discurren desde la meseta tibetana hasta desembocar en las densamente pobladas costas orientales. China tiene 14 500 km de costa a lo largo del océano Pacífico,5​ en donde está bañada por los mares Amarillo, de Bohai, de China Oriental y de la China Meridional.",
            img: "assets/img/china_flag.png",
            moneda:"Yen",
            capital: "Pekin",
            visa: "Hay que tramitar visa previa. Duracion de un mes, una única entrada",
            lugares: "La gran muralla China, Los guerreros de Xian, parque nacional de Zhangjiajie, Paisajes de Yangshuo,  la moderna Shanghai, la ciudad medieval de Pingyao"
          },
          {
            nombre: "Filipinas",
             bio: "Archipielago formado por 7000 islas, comunicadas por aire y mar. Fue colonia española y algunas palabras en su vocabulario son como las nuestras. La naturaleza y playas espectaculares es el punto fuerte pàra visitar este pais asi como su gran vida marina",
            img: "assets/img/filipinas_flag.png",
            moneda:"Peso filipino",
            capital: "Manila",
            visa: "Visado gratis para estancias menores o iguales a 30 dias",
            lugares: "Corón, el nido, Malapascua, Bohol, Siargao y Camiguín"
          },
          {
            nombre: "Indonesia",
             bio: "Con mas de 17.500 islas forma el archipielago mas grande del mundo. por lo tanto con muchos contrastes y numerosas islas para perderse",
            img: "assets/img/indonesia_flag.png",
            moneda:"Rupia Indonesia",
            capital: "Yakarta",
            visa: "Visado gratis para estancias inferiores a 30 dias. Visado previo para estancia de hasta tres meses",
            lugares: "Bali, Parque nacional de komodo, templos de Borodudur y Prambanan, Parque Marino de Bunaken y Raja Ampat, sumatra, Tana Toraja"
           },
          {
            nombre: "Malasia",
            bio: "El país mas moderno y desarrollado del sudeste asiatico. Dividido en la parte continental y en la porte insular de Borneo",
            img: "assets/img/malasia_flag.png",
            moneda:"Ringgit",
            capital: "Kuala Lumpur",
            visa: "Visa gratis de hasta tres meses",
            lugares: "Kuala Lumpur, Malaka, las islas Perhentian, gorilas en Borneo, streetart en Georgetown, Selva de Taman Negara, Monte Kinabalu, la isla de kapas y/o tioman"
           },
          {
            nombre: "Tailandia",
            bio: "El país mas visitado y turistico del sudeste. grandes playas y grandes selvas. Un pais que no deja indiferente.",
            img: "assets/img/tailandia_flag.png",
            moneda:"Baht tailandes",
            capital: "Bangkog",
            visa: "Visa gratuita para tres meses",
            lugares: "Bankog, Chiang mai, Pai, Chiang Rai, Ayutthaya, Kanchanaburi y su famoso puente sobre el rio Kwai, Koh thao, isla Phi Phi"
          },
          {
            nombre: "Vietnam",
             bio: "Famoso por su terrible guerra contra EEUU. Tiene una forma alargada que lo hace facil de visitar. ",
            img: "assets/img/vietnam_flag.png",
            moneda:"Dong vietnamita",
            capital: "Hanoi",
            visa: "Visa obligatoria, se puede tramitar online",
            lugares: "Hanoi, ho chi min, el delta del Mekong, bahia de Halong, Sapa, Ciudad antigua de Hui, Hoi an, Cuevas de Phong nha playas en Phu quoc o en islas de con Dao"
          }
      ]; 

    constructor() { 

        console.log("Servicio listo para usarse");
    }

    getPaises(): Pais[]{
        return this.paises;
    }

    getPais(idx: string): Pais[]{
        return this.paises[idx];
    }
 
    buscarPais(term1:string): Pais[] {
     
      //let termAux =term1.toLowerCase();
     //var  busq = this.getPaises().filter(elem => elem.nombre.toLowerCase().indexOf('term1') > -1); 
     //console.log(busq);
    
     let paisesArr:Pais[] = [];
     for (let pais of this.paises){
      if (pais.nombre.toLowerCase().indexOf( term1) > -1){
        console.log(term1+" existe en "+ pais.nombre);
        paisesArr.push(pais)

      }
    }
     
      return paisesArr;

    
  }
  
}

export interface Pais{
    nombre: String;
    bio: String;
    img: String;
    moneda: String;
    capital: String;
    visa: String;
    lugares: String;
    
  }