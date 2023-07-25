import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../kategoriler/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../filmler/product';

@Component({
  selector: 'app-urun-ekle',
  templateUrl: './urun-ekle.component.html',
  styleUrls: ['./urun-ekle.component.css'],
  providers:[CategoryService,ProductService]
})
export class UrunEkleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categoryService:CategoryService, private productService:ProductService) {  }

  productAddForm: FormGroup;
  product:Product = new Product();
  
  
  createproductAddForm() {

    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      imageUrl: ["", Validators.required],
      puan: ["", Validators.required],
      categoryId: ["", Validators.required],


    });
  }
  categories: Category[];
  ngOnInit() {
    this.createproductAddForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }

  add(){
    if(this.productAddForm.valid){
      this.product = Object.assign({}, this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data => {
    })
  }
}
