import { CartService } from './../Cart.service';
import { Classification } from './../../Classification.enum';
import { Product } from './../../Shop';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from './../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { products } from '../products';
import { empty } from 'rxjs';
import { ApiService } from '../api.service';
import { Prodaction } from 'src/models';

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.css']
})
export class MenProductsComponent implements OnInit {

  products: Product[] = [];
  productions:Prodaction[]=[];
  selectedProduct: Product;

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService,
    private apiService:ApiService) { }

  ngOnInit() {
    this.getProductsMen();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProductsMen():void{
    this.apiService.getProductsMen().subscribe(productions=>this.productions=productions);
  }

  goBack(){
    this.location.back();
  }

  addToCard(product: Prodaction):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }
}
