import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiReproductorComponent } from './mi-reproductor/mi-reproductor.component';
import { ListaAlbumesComponent } from './lista-albumes/lista-albumes.component';

@NgModule({
  declarations: [
    AppComponent,
    MiReproductorComponent,
    ListaAlbumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
