import { CartService } from './../Cart.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/Shop';
import { ApiService } from '../api.service';
import { Prodaction } from 'src/models';

@Component({
  selector: 'app-kid-product-detail',
  templateUrl: './kid-product-detail.component.html',
  styleUrls: ['./kid-product-detail.component.css']
})
export class KidProductDetailComponent implements OnInit {

  constructor(
    private category_productService: Category_productService,
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService,
    private apiService:ApiService) { }

  product: Product;
  production:Prodaction;

  ngOnInit() {
    this.getProductItem();
  }

  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.category_productService.getProduct(id).subscribe(product => this.product = product);
  }

  getProductItem(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getProductItem(id).subscribe(production=>this.production=production);
  }

  goBack(){
    this.location.back();
  }

  addToCard(product: Prodaction):void{
    this.cartservice.addToCard(product);
    window.alert('Product is added');
  }

}
