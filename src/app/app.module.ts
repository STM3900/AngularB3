import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TennisPlayerComponent } from './graphics/tennis-player/tennis-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TennisPlayerFormComponent } from './graphics/tennis-player-form/tennis-player-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TennisPlayerDetailComponent } from './graphics/tennis-player-detail/tennis-player-detail.component';
import { TennisPlayerListComponent } from './graphics/tennis-player-list/tennis-player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    TennisPlayerFormComponent,
    TennisPlayerDetailComponent,
    TennisPlayerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
