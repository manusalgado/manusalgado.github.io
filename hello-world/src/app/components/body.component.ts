import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'
})
export class BodyComponent {

  mostrar:boolean = false;
   
  frase:any = {
    mensaje: "Ser emprendedor es como comer vidrios y pararse en el abismo de la muerte.",
    autor: "Elon Musk"
  }

  futbolistas:string[] = ["Ronaldo", "Messi", "Neymar"];
  
}