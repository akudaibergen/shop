import { CartService } from './../Cart.service';
import { Product } from './../../Shop';
import { products } from './../products';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Classification } from 'src/Classification.enum';
import { ApiService } from '../api.service';
import { Prodaction } from 'src/models';


@Component({
  selector: 'app-kid-products',
  templateUrl: './kid-products.component.html',
  styleUrls: ['./kid-products.component.css']
})
export class KidProductsComponent implements OnInit {

  products: Product[] = [];
  productions: Prodaction[] = [];
  selectedProduct: Product;

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService,
    private apiService:ApiService) { }

  ngOnInit() {
    this.getProductsKid();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProductsKid():void{
    this.apiService.getProductsKids().subscribe(productions => this.productions = productions);
  }

  goBack(){
    this.location.back();
  }

  addToCard(product: Prodaction):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }

}
