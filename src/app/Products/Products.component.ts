import { CartService } from './../Cart.service';
import { Product } from './../../Shop';
import { Category_productService } from './../category_product.service';
import { products } from './../products';
import { Component, OnInit } from '@angular/core';
import { Prodaction } from 'src/models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;
  productions: Prodaction[];

  constructor(private category_productService: Category_productService,
    private cartservice: CartService, private apiService: ApiService) { }

  ngOnInit() {
    this.getProductList();
  }

  onSelect(product: Product): void{
    this.selectedProduct = product;
  }

  getProductList(){
    this.apiService.getProductsList().subscribe(productions =>this.productions =productions);
  }

  getProducts():void{
    this.category_productService.getProducts().subscribe(products => this.products = products);
  }

  addToCard(product: Prodaction):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }

}
