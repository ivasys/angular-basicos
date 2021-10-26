import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
 
})


export class PersonajesComponent {

  //@Input() Personajes:any = [];

  get Personajes(){
        return this.DbzService.Personajes
    }

  constructor(private DbzService: DbzService){


  }

}
 