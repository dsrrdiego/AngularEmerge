import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { ConsoleReporter } from 'jasmine';
import { Album } from './lista-albumes/Album';

@Injectable({
  providedIn: 'root'
})
export class ReproductorService {
  // listaAlbumes:Album[]=[];
  private _listaAlbumes :Album[]=[];
  listaAlbumes: BehaviorSubject<Album[]> =new BehaviorSubject(this._listaAlbumes);

  reproducir(album: Album) {
    let item:Album=this._listaAlbumes.find((v1)=>v1.nombre==album.nombre)
    if (!item){
      this._listaAlbumes.push(album);
    }
      console.log(this._listaAlbumes);
      this.listaAlbumes.next(this._listaAlbumes);
  }

  constructor() { }
}
