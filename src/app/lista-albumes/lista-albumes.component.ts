import { Component, OnInit } from '@angular/core';
import { Album } from './Album';
// import { Album } from './Album';

@Component({
  selector: 'app-lista-albumes',
  templateUrl: './lista-albumes.component.html',
  styleUrls: ['./lista-albumes.component.scss']
})
export class ListaAlbumesComponent implements OnInit {
  album:Album[]=[{
    "imagen":"assets/foto1.jpg",
    "artista":"Batulitos Electronautas",
    "nombre":"Hacia la conquista del Ether",
    "genero":"popular",
    "cantidadDeCanciones":3,
    "estaDeModa":false,
    precio:123
  },{
    "imagen":"assets/foto1.jpg",
    artista:"Marcelete",
    nombre:"Simple",
    genero:"popular",
    cantidadDeCanciones:4,
    estaDeModa:false,
    precio:25.642526626246246246,


  },
  {
    imagen:"assets/foto1.jpg",
    artista:"pepe",
    nombre:"Invisible",
    genero:"punk",
    cantidadDeCanciones:2,
    estaDeModa:true,
    precio:83.5,

  }]


  constructor() { }

  ngOnInit(): void {
  }

}
