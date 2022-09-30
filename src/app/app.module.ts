import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiReproductorComponent } from './mi-reproductor/mi-reproductor.component';
import { ListaAlbumesComponent } from './lista-albumes/lista-albumes.component';
import  { FormsModule } from '@angular/forms';
import { PestaniaArtistasComponent } from './pestania-artistas/pestania-artistas.component';
import { PestaniaHomeComponent } from './pestania-home/pestania-home.component';
import { PestaniaRadioComponent } from './pestania-radio/pestania-radio.component';
import { PestaniaContactosComponent } from './pestania-contactos/pestania-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    MiReproductorComponent,
    ListaAlbumesComponent,
    PestaniaArtistasComponent,
    PestaniaHomeComponent,
    PestaniaRadioComponent,
    PestaniaContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
