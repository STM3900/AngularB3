import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { TennisPlayerComponent } from './graphics/tennis-player/tennis-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TennisPlayerFormComponent } from './graphics/tennis-player-form/tennis-player-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TennisPlayerDetailComponent } from './graphics/tennis-player-detail/tennis-player-detail.component';
import { TennisPlayerListComponent } from './graphics/tennis-player-list/tennis-player-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BonjourComponent } from './graphics/bonjour/bonjour.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    TennisPlayerFormComponent,
    TennisPlayerDetailComponent,
    TennisPlayerListComponent,
    BonjourComponent
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> parent of e28fb10 (Creation de mon premier composant)
=======

@NgModule({
  declarations: [
    AppComponent
>>>>>>> parent of e28fb10 (Creation de mon premier composant)
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
