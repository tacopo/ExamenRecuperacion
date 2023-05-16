import { Component } from '@angular/core';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.scss']
})
export class DivisasComponent {

  euros1:number;
  libras1:number;
  euros2:number;
  libras2:number;

  cambioEuroLibra=0.87;
  cambioLibraEuro=1.15;

  constructor(){
    this.euros1=0;
    this.euros2=0;
    this.libras1=0;
    this.libras2=0;
  }

  cambiarEurosLibras(){
    console.log(""+this.euros1)
    this.libras1=+(this.euros1*this.cambioEuroLibra).toFixed(2);

  }

  cambiarLibrasEuros():void{
    console.log("cambio")
    this.euros2=+(this.libras2*this.cambioLibraEuro).toFixed(2);
  }
}
