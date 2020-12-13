import { Category } from './../../Shop';
import { categories } from './../Category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category_productService } from './../category_product.service';
import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category;

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getCategories();
  }

  onSelect(category: Category):void{
    this.selectedCategory = category;
  }

  getCategories():void{
    this.category_productService.getCategories().subscribe(categories => this.categories = categories);
  }

  goBack(){
    this.location.back();
  }

}
