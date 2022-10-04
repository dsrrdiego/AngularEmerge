import { Injectable } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';
import { Album } from './lista-albumes/Album';

@Injectable({
  providedIn: 'root'
})
export class ReproductorService {
  listaCanciones:Album[]=[];

  reproducir(album: Album) {
    let item:Album=this.listaCanciones.find((v1)=>v1.nombre==album.nombre)
    if (!item){
      this.listaCanciones.push(album);
    }
      console.log(this.listaCanciones);
    // throw new Error('Method not implemented.');
  }

  constructor() { }
}
