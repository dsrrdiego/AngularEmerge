import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../lista-albumes/Album';
import { ReproductorService } from '../reproductor.service';

@Component({
  selector: 'app-mi-reproductor',
  templateUrl: './mi-reproductor.component.html',
  styleUrls: ['./mi-reproductor.component.scss']
})
export class MiReproductorComponent implements OnInit {
  miLista$:Observable<Album[]>;
  constructor(private reproductorService:ReproductorService) { 
  this.miLista$=reproductorService.listaAlbumes.asObservable();  
  }
  
  ngOnInit(): void {
  }


}
