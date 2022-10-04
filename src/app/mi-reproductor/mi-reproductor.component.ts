import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../lista-albumes/Album';
// import { Album } from '../lista-albumes/Album';
import { ReproductorService } from '../reproductor.service';

@Component({
  selector: 'app-mi-reproductor',
  templateUrl: './mi-reproductor.component.html',
  styleUrls: ['./mi-reproductor.component.scss']
})
export class MiReproductorComponent implements OnInit {
  // miLista:Album[]=[];
  miLista$:Observable<Album[]>;
  constructor(private reproductorService:ReproductorService) { 
  // reproductorService.listaAlbumes.subscribe(observable=>this.miLista=observable);
  this.miLista$=reproductorService.listaAlbumes.asObservable();  
  }
  
  ngOnInit(): void {
  }


}
