import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from './lista-albumes/Album';

@Injectable({
  providedIn: 'root'
})
export class ReproductorService {
  private _listaAlbumes :Album[]=[];
  listaAlbumes: BehaviorSubject<Album[]> =new BehaviorSubject(this._listaAlbumes);

  reproducir(album: Album) {
    let item:Album=this._listaAlbumes.find((v1)=>v1.nombre==album.nombre)
    if (!item){
      this._listaAlbumes.push(album);
    }
      this.listaAlbumes.next(this._listaAlbumes);
  }

  constructor() { }
}
