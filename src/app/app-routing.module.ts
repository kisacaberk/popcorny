import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrunEkleComponent } from './components/urun-ekle/urun-ekle.component';
import { FilmlerComponent } from './components/filmler/filmler.component';

const routes: Routes = [
  {path:'urun-ekle',component : UrunEkleComponent},
  {path:'',component: FilmlerComponent},
  //{path:"",redirectTo:"filmler"}
  {path: 'category/:categoryId', component:FilmlerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
