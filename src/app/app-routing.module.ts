import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PestaniaArtistasComponent } from './pestania-artistas/pestania-artistas.component';
import { PestaniaContactosComponent } from './pestania-contactos/pestania-contactos.component';
import { PestaniaHomeComponent } from './pestania-home/pestania-home.component';
import { PestaniaRadioComponent } from './pestania-radio/pestania-radio.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },
  {
    path:'home',
    component:PestaniaHomeComponent
    
  },
  {
    path:'artistas',
    component:PestaniaArtistasComponent
  },
  {
    path:'contactos',
    component:PestaniaContactosComponent
  },
  {
    path:'radio',
    component:PestaniaRadioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
