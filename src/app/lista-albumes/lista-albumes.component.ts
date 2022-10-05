import { Component, OnInit } from '@angular/core';
import { ReproductorService } from '../reproductor.service';
import { TraerMockService } from '../traer-mock.service';
import { Album } from './Album';

@Component({
  selector: 'app-lista-albumes',
  templateUrl: './lista-albumes.component.html',
  styleUrls: ['./lista-albumes.component.scss']
})
export class ListaAlbumesComponent implements OnInit {
  albumes:Album[];
  
  // injeccion de dependencia
  constructor(private reproductor:ReproductorService,
              private traerMock:TraerMockService) { 
    
  }

  ngOnInit(): void {
    this.traerMock.traer().subscribe(albumes=>this.albumes=albumes);
  }
  reproducir(album):void{
    this.reproductor.reproducir(album);
  }

  maxReached(m:string):void{
    alert(m);
  }

}
