import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from './category';
@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css'],
  providers: [CategoryService]
})
export class KategorilerComponent implements OnInit {
  constructor( private categoryService: CategoryService) { }
  title = "Kategori Listesi"
  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    });
      }
}
