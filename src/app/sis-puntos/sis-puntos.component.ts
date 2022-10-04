import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../lista-albumes/Album';

@Component({
  selector: 'app-sis-puntos',
  templateUrl: './sis-puntos.component.html',
  styleUrls: ['./sis-puntos.component.scss']
})
export class SisPuntosComponent implements OnInit {
  
  constructor() {}

  @Input() valor:number;
  @Output() valorChange: EventEmitter<number>=new EventEmitter<number>();
  @Input() max:number;
  @Input() min:number;
  @Output() maxReached: EventEmitter<string>=new EventEmitter<string>();
  @Input() puntajeMax:number;
  ngOnInit(): void {}

  sumar():void{
    // debugger;
    if (this.valor<this.max){
      this.valor++;
      this.valorChange.emit(this.valor);
    }
    if (this.valor>this.puntajeMax)
    this.maxReached.emit("supero el puntaje inicial");

  }
  restar():void{
    if (this.valor>this.min)
      this.valor--;
      this.valorChange.emit(this.valor);

  }
  cambioDePuntaje(event: { preventDefault():any;key: any;target:any },album:Album):void{
    if (event.key<0 || event.key>10)
      event.preventDefault();
    
    // console.log(event);
  }
}
