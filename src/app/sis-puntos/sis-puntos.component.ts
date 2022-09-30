import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../lista-albumes/Album';

@Component({
  selector: 'app-sis-puntos',
  templateUrl: './sis-puntos.component.html',
  styleUrls: ['./sis-puntos.component.scss']
})
export class SisPuntosComponent implements OnInit {
  
  constructor() {}

  @Input()
  album:Album ;
  
  ngOnInit(): void {}

  sumar(album:Album):void{
    if (album.puntos<10)
      album.puntos++;
  }
  restar(album:Album):void{
    if (album.puntos>0)
      album.puntos--;
  }
  cambioDePuntaje(event: { preventDefault():any;key: any;target:any },album:Album):void{
    if (event.key<0 || event.key>10)
      event.preventDefault();
    
    // console.log(event);
  }
}
