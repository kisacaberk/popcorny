import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnaComponent } from './components/ana/ana.component';
import { AramaKutusuComponent } from './components/arama-kutusu/arama-kutusu.component';
import { FilmlerComponent } from './components/filmler/filmler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnaComponent,
    AramaKutusuComponent,
    FilmlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
