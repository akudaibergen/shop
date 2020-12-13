import { Prodaction } from './../../models';
import { ApiService } from './../api.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { Product } from 'src/Shop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  products: Prodaction[] = [];
  selectedProduct: Product;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProducts():void{
    this.apiService.getProductsList().subscribe(products => this.products = products);
  }
}
