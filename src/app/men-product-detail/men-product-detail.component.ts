import { CartService } from './../Cart.service';
import { MenProductsComponent } from './../men-products/men-products.component';
import { Product } from './../../Shop';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category_productService } from '../category_product.service';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { ApiService } from '../api.service';
import { Prodaction } from 'src/models';

@Component({
  selector: 'app-men-product-detail',
  templateUrl: './men-product-detail.component.html',
  styleUrls: ['./men-product-detail.component.css']
})
export class MenProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cartservice: CartService,
    private apiService: ApiService) { }

  product: Product;
  production:Prodaction;

  ngOnInit() {
    this.getProductItem();
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
