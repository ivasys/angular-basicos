import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  Heroeborrado : string = "";

  borrarHeroe(){

    this.Heroeborrado = this.heroes.shift() || '';

  }

}
