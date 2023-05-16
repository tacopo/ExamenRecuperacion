import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() nombre:String="";

  @Input() imagen:String="";


  @Input() descripcion:String="";

  @Input() enlace:String="";

}
