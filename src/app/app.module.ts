import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltroPersonajesPipe } from './pipes/filtro-personajes.pipe';

@NgModule({
  declarations: [AppComponent, FilmsComponent, CharactersComponent, FiltroPersonajesPipe,],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
