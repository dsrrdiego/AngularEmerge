import { Component, OnInit } from '@angular/core';
// import { Album } from '../lista-albumes/Album';
import { ReproductorService } from '../reproductor.service';

@Component({
  selector: 'app-mi-reproductor',
  templateUrl: './mi-reproductor.component.html',
  styleUrls: ['./mi-reproductor.component.scss']
})
export class MiReproductorComponent implements OnInit {

  constructor(private reproductor:ReproductorService) { }

  ngOnInit(): void {
  }


}
