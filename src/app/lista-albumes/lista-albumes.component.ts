import { Component, OnInit } from '@angular/core';
import { ReproductorService } from '../reproductor.service';
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
    puntajeMaximo:3,
  },{
    "imagen":"assets/foto1.jpg",
    artista:"Marcelete",
    nombre:"Simple",
    genero:"popular",
    cantidadDeCanciones:4,
    estaDeModa:false,
    precio:25.642526626246246246,
    puntos:1,
    puntajeMaximo:5,


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
    puntajeMaximo:5,

  }]

  // reproductor : ReproductorService;
  constructor(private reproductor:ReproductorService) { 
    // this.reproductor=new ReproductorService();
  }

  ngOnInit(): void {}
  reproducir(album):void{
    this.reproductor.reproducir(album);
  }

  maxReached(m:string):void{
    alert(m);
  }

}
