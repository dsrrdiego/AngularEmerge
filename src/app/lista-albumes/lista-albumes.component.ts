import { Component, OnInit } from '@angular/core';
import { Album } from './Album';

@Component({
  selector: 'app-lista-albumes',
  templateUrl: './lista-albumes.component.html',
  styleUrls: ['./lista-albumes.component.scss']
})
export class ListaAlbumesComponent implements OnInit {
  albumes:Album[]=[{
    "imagen":"assets/foto1.jpg",
    "artista":"Batulitos Electronautas",
    "nombre":"Hacia la conquista del Ether",
    "genero":"popular",
    "cantidadDeCanciones":3,
    "estaDeModa":false,
    precio:123,
    puntos:1,
  },{
    "imagen":"assets/foto1.jpg",
    artista:"Marcelete",
    nombre:"Simple",
    genero:"popular",
    cantidadDeCanciones:4,
    estaDeModa:false,
    precio:25.642526626246246246,
    puntos:1,


  },
  {
    imagen:"assets/foto1.jpg",
    artista:"pepe",
    nombre:"Invisible",
    genero:"punk",
    cantidadDeCanciones:2,
    estaDeModa:true,
    precio:83.5,
    puntos:1,

  }]


  constructor() { }

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
