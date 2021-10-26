import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    constructor(){
        console.log("servicio iniciado")
    }


    private _Personajes : Personaje[]=[
              {
                nombre: "Goku",
                poder: 15000
              },
              {
                nombre: "Vegeta",
                poder: 7500
              }
    ]


    get Personajes() : Personaje[]{
        return [...this._Personajes];
    }


    agregarPersonaje(Personaje:Personaje){

        this._Personajes.push(Personaje);
    }
    
}