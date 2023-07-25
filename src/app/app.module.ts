import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { AramaKutusuComponent } from './components/arama-kutusu/arama-kutusu.component';
import { FilmlerComponent } from './components/filmler/filmler.component';
import { UrunEkleComponent } from './components/urun-ekle/urun-ekle.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';

import { ProductFilterPipe } from './services/product-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KategorilerComponent,
    AramaKutusuComponent,
    FilmlerComponent,
    UrunEkleComponent,

    ProductFilterPipe,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
