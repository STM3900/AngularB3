import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { TennisPlayerComponent } from './graphics/tennis-player/tennis-player.component';

// ng generate module app-routing --flat --module=app
const routes: Routes = [
  { path:'players', component: TennisPlayerComponent  },
  { path:'', component: TennisPlayerComponent  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
