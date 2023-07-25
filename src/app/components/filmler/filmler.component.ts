import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './product';
@Component({
  selector: 'app-filmler',
  templateUrl: './filmler.component.html',
  styleUrls: ['./filmler.component.css'],
  providers: [ProductService]
})
export class FilmlerComponent implements OnInit {
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }
  title = "Ürün Listesi"
  filterText = ""
  
  products: Product[];
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      
this.productService.getProducts(params["categoryId"]).subscribe(data=>{
  this.products = data
    })

});
  } 

}
